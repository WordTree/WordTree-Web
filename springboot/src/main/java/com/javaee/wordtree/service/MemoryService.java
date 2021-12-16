package com.javaee.wordtree.service;

import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.javaee.wordtree.entity.DateRecord;
import com.javaee.wordtree.entity.MmryRecord;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.mapper.DateRecordMapper;
import com.javaee.wordtree.mapper.MmryRecordMapper;
import com.javaee.wordtree.mapper.WordMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.annotation.Resource;
import java.util.*;

/**
 * @author DaY1zz
 * @create 2021-12-08-10:34
 */
@Service
public class MemoryService {

    @Resource
    private WordMapper wordMapper;

    @Resource
    private MmryRecordMapper mmryRecordMapper;

    @Resource
    private DateRecordMapper dateRecordMapper;

    //艾宾浩斯遗忘曲线记忆周期
    private int[] memoryCircle = {1,2,4,7,15};

    /**
     * 获取目标词书中新的未学习单词
     */
    public List<Word> getNewWords(String userID,int needCount){

        Map<String,Object> map = new HashMap<String, Object>();
        map.put("userID",userID);
        map.put("needCount",needCount);
        List<Integer> newWordsID = wordMapper.findNewWordsID(map);
        List<Word> newWords = new ArrayList<>(needCount);
        for(Integer i : newWordsID){
            Word targetWord = wordMapper.findWord(i);
            newWords.add(targetWord);
        }
        return newWords;

    }

    /**
     *获取今日应复习的单词
     */
    public List<Word> getNeedReviewWords(String userID){
        int needReviewWordCount = mmryRecordMapper.findNeedReviewWordCount(userID);
        List<Integer> reviewWordsID = mmryRecordMapper.findNeedReviewWordsID(userID);
        List<Word> reviewWords = new ArrayList<>(needReviewWordCount);
        for(Integer i : reviewWordsID){
            Word targetWord = wordMapper.findWord(i);
            reviewWords.add(targetWord);
        }
        return reviewWords;
    }

    /**
     * 用户完成一个新单词学习，memory_record表新增1条记录,修改date_record表中的数据
     * @param userID
     * @param wordID
     */
    @Transactional(rollbackFor = Exception.class)
    public void learnNewWord(String userID,int wordID){
        Date todayDate = DateUtil.parseDate(DateUtil.today());

        MmryRecord newMmryRecord = new MmryRecord();
        newMmryRecord.setUserID(userID);
        newMmryRecord.setWordID(wordID);
        newMmryRecord.setPhase(1);
        newMmryRecord.setNextMmryTime(DateUtil.offsetDay(todayDate,memoryCircle[0]));
        try{
            mmryRecordMapper.insert(newMmryRecord);

            LambdaQueryWrapper<DateRecord> lambdaQueryWrapper = Wrappers.lambdaQuery();
            DateRecord dateRecord = dateRecordMapper.selectOne(lambdaQueryWrapper.eq(DateRecord::getUserID,userID).eq(DateRecord::getDate, todayDate));
            if(dateRecord == null){
                //如果当天没有学习记录，则新增学习记录
                DateRecord newDateRecord = new DateRecord();
                newDateRecord.setUserID(userID);
                newDateRecord.setDate(todayDate);
                newDateRecord.setLearningTime(1);
                newDateRecord.setLearnCount(1);
                newDateRecord.setReviewCount(0);
                dateRecordMapper.insert(newDateRecord);
            }
            else{ //当天有学习记录则将已学习单词数+1
                dateRecord.setLearnCount(dateRecord.getLearnCount()+1);
                dateRecordMapper.update(dateRecord,lambdaQueryWrapper.eq(DateRecord::getUserID,userID).eq(DateRecord::getDate, todayDate));
            }
        } catch(Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();   //涉及多表同步更新，有异常则事务回滚
        }

    }

    /**
     * 用户完成一个单词的复习，memory_record更新1条记录
     * @param userID
     * @param wordID
     */
    @Transactional(rollbackFor = Exception.class)
    public void reviewOldWord(String userID,int wordID){
        Date todayDate = DateUtil.parseDate(DateUtil.today());

        try{
            LambdaQueryWrapper<MmryRecord> lambdaQueryWrapper = Wrappers.lambdaQuery();
            MmryRecord mmryRecord = mmryRecordMapper.selectOne(lambdaQueryWrapper.eq(MmryRecord::getUserID, userID).eq(MmryRecord::getWordID, wordID));
            int index = mmryRecord.getPhase();
            if(index < 5){
                Date nextMmryTime = DateUtil.offsetDay(todayDate,memoryCircle[index]);
                mmryRecord.setNextMmryTime(nextMmryTime);
                mmryRecord.setPhase(mmryRecord.getPhase()+1);
                mmryRecordMapper.update(mmryRecord,lambdaQueryWrapper.eq(MmryRecord::getUserID, userID).eq(MmryRecord::getWordID, wordID));
            }else{
                //phase = 5时，下次不用再复习了
                mmryRecord.setPhase(mmryRecord.getPhase()+1);
                mmryRecordMapper.update(mmryRecord,lambdaQueryWrapper.eq(MmryRecord::getUserID, userID).eq(MmryRecord::getWordID, wordID));

            }

            LambdaQueryWrapper<DateRecord> dateRecordWrapper = Wrappers.lambdaQuery();
            DateRecord dateRecord = dateRecordMapper.selectOne(dateRecordWrapper.eq(DateRecord::getUserID,userID).eq(DateRecord::getDate, todayDate));
            if(dateRecord == null){
                //如果当天没有学习记录，则新增学习记录
                DateRecord newDateRecord = new DateRecord();
                newDateRecord.setUserID(userID);
                newDateRecord.setDate(todayDate);
                newDateRecord.setLearningTime(1);
                newDateRecord.setLearnCount(0);
                newDateRecord.setReviewCount(1);
                dateRecordMapper.insert(newDateRecord);
            }
            else{
                //当天有学习记录则将已复习单词数+1
                dateRecord.setReviewCount(dateRecord.getReviewCount()+1);
                dateRecordMapper.update(dateRecord,dateRecordWrapper.eq(DateRecord::getUserID,userID).eq(DateRecord::getDate, todayDate));
            }
        }catch(Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  //涉及多表同步更新，有异常则事务回滚
        }
    }

    public void updateTodayLearningTime(String userID,int learningTime){

        Date todayDate = DateUtil.parseDate(DateUtil.today());

        LambdaQueryWrapper<DateRecord> lambdaQueryWrapper = Wrappers.lambdaQuery();
        DateRecord dateRecord = dateRecordMapper.selectOne(lambdaQueryWrapper.eq(DateRecord::getUserID, userID).eq(DateRecord::getDate, todayDate));

        dateRecord.setLearningTime(learningTime);
        dateRecordMapper.update(dateRecord,lambdaQueryWrapper.eq(DateRecord::getUserID, userID).eq(DateRecord::getDate, todayDate));

    }

}
