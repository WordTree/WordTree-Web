package com.javaee.wordtree.controller;

import com.javaee.wordtree.common.Result;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.service.MemoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-12-08-15:41
 */
@RestController
@RequestMapping("/memory")
public class MemoryController {

    @Resource
    MemoryService memoryService;

    @GetMapping("/newWords")
    public Result<?> getNewWords(@RequestParam String userID,
                                 @RequestParam Integer needCount){
        List<Word> newWords = memoryService.getNewWords(userID, needCount);
        return Result.success(newWords);
    }

    @GetMapping("/reviewWords")
    public Result<?> getReviewWords(@RequestParam String userID){
        List<Word> reviewWords = memoryService.getNeedReviewWords(userID);
        return Result.success(reviewWords);
    }

}
