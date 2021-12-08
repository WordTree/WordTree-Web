package com.javaee.wordtree.service;

import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.mapper.MmryRecordMapper;
import com.javaee.wordtree.mapper.WordMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


}
