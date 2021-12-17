package com.javaee.wordtree.controller;

import com.javaee.wordtree.common.Result;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.service.MemoryService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author DaY1zz
 * @create 2021-12-08-15:41
 */
@RestController
@RequestMapping("/memory")
public class MemoryController {

    @Resource
    MemoryService memoryService;

    /**
     * 获取一批未学习单词接口
     * @param userID
     * @param needCount
     * @return
     */
    @GetMapping("/newWords")
    public Result<?> getNewWords(@RequestParam String userID,
                                 @RequestParam Integer needCount){
        List<Word> newWords = memoryService.getNewWords(userID, needCount);
        return Result.success(newWords);
    }

    /**
     * 获取今日需复习单词接口
     * @param userID
     * @return
     */
    @GetMapping("/reviewWords")
    public Result<?> getReviewWords(@RequestParam String userID){
        List<Word> reviewWords = memoryService.getNeedReviewWords(userID);
        return Result.success(reviewWords);
    }

    /**
     * 学习新单词，添加记忆记录接口
     * @param reqBodyMap
     * @return
     */
    @PostMapping("/newWord")
    public Result<?> learnNewWord(@RequestBody Map<String,Object> reqBodyMap){
        String userID = (String) reqBodyMap.get("userID");
        int wordID = (int) reqBodyMap.get("wordID");
        memoryService.learnNewWord(userID,wordID);
        return Result.success();

    }

    /**
     * 复习单词，更细记忆记录接口
     * @param reqBodyMap
     * @return
     */
    @PutMapping("/reviewWord")
    public Result<?> updateReviewWord(@RequestBody Map<String,Object> reqBodyMap){
        String userID = (String) reqBodyMap.get("userID");
        int wordID = (int) reqBodyMap.get("wordID");

        memoryService.reviewOldWord(userID,wordID);
        return Result.success();
    }

    /**
     * 更新今日学习时长接口
     * @param reqBodyMap
     * @return
     */
    @PutMapping("/learningTime")
    public Result<?> updateLearningTime(@RequestBody Map<String,Object> reqBodyMap){
        String userID = (String) reqBodyMap.get("userID");
        int learningTime = (int) reqBodyMap.get("learningTime");

        memoryService.updateTodayLearningTime(userID,learningTime);
        return Result.success();

    }

}
