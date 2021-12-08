package com.javaee.wordtree.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.javaee.wordtree.common.CircleData;
import com.javaee.wordtree.common.ColumnData;
import com.javaee.wordtree.common.LineData;
import com.javaee.wordtree.entity.DateRecord;
import com.javaee.wordtree.entity.MmryRecord;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.mapper.DateRecordMapper;
import com.javaee.wordtree.mapper.MmryRecordMapper;
import com.javaee.wordtree.mapper.WordMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-29-14:45
 */

@Service
public class StatisticService {

    @Resource
    private DateRecordMapper dateRecordMapper;

    @Resource
    private MmryRecordMapper mmryRecordMapper;

    @Resource
    private WordMapper wordMapper;

    /**
     * 根据用户ID从数据库查询该用户最近七天的单词数据
     * 并进行数据封装
     * @param userID
     * @return
     */
    public List<ColumnData> findLatestSevenDaysWordData(String userID){
        List<DateRecord> records = dateRecordMapper.findLatestSevenDaysData(userID);
        List<ColumnData> result = new ArrayList<>(15);
        for(DateRecord dateRecord : records){
            ColumnData data1 = new ColumnData();
            ColumnData data2 = new ColumnData();
            data1.setDate(dateRecord.getDate());
            data2.setDate(dateRecord.getDate());
            data1.setType("Learn");
            data2.setType("Review");
            data1.setValue(dateRecord.getLearnCount());
            data2.setValue(dateRecord.getReviewCount());
            result.add(data1);
            result.add(data2);
        }
        return result;
    }

    /**
     * 根据用户ID从数据库查询最近七天的学习时长数据
     * 并进行数据封装
     * @param userID
     * @return
     */
    public List<LineData> findLatestSevenDaysTimeData(String userID){
        List<DateRecord> records = dateRecordMapper.findLatestSevenDaysData(userID);
        List<LineData> result = new ArrayList<>();
        for(DateRecord dateRecord:records){
            LineData lineData = new LineData(dateRecord.getDate(),dateRecord.getLearningTime());
            result.add(lineData);
        }
        return result;
    }

    /**
     * 根据用户ID从数据库查询已学单词各阶段的百分比
     * 并进行数据封装
     * @param userID
     * @return
     */
    public List<CircleData> findMmryPercentage(String userID){
        List<CircleData> records = mmryRecordMapper.findMmryPercentage(userID);
        for(int i = 0;i<records.size();i++){
            switch (records.get(i).getPhase()){
                case 1:records.get(i).setType("认识");break;
                case 2:records.get(i).setType("了解");break;
                case 3:records.get(i).setType("熟悉");break;
                case 4:records.get(i).setType("掌握");break;
                case 5:records.get(i).setType("烂熟于心");break;
            }
        }
        return records;
    }

    /**
     * 根据用户ID获取在目标词书中已学习的单词总量
     * @param userID
     * @return
     */
    public int getLearnedWordCount(String userID){
        return mmryRecordMapper.findLearnedWordCount(userID);
    }

    /**
     * 根据用户所选词书获取词书单词总数
     * @param belongBook
     * @return
     */
    public int getTotalWordCount(String belongBook){
        LambdaQueryWrapper<Word> lambdaQueryWrapper = Wrappers.lambdaQuery();
        return wordMapper.selectCount(lambdaQueryWrapper.eq(Word::getBelongBook,belongBook));
    }

    /**
     * 根据用户ID获取今日需要复习的单词数
     * @param userID
     * @return
     */
    public int getNeedReviewWordCount(String userID){
        return mmryRecordMapper.findNeedReviewWordCount(userID);
    }





}
