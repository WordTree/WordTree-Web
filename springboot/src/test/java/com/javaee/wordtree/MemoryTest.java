package com.javaee.wordtree;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.service.MemoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;
import java.util.zip.CheckedOutputStream;

/**
 * @author DaY1zz
 * @create 2021-12-08-13:06
 */
@SpringBootTest
public class MemoryTest {

    @Autowired
    MemoryService memoryService;

    @Test
    public void testGetNewWords(){
        List<Word> newWords = memoryService.getNewWords("123456", 20);
        for(Word word : newWords){
            System.out.println(word.getWord());
            System.out.println(word.getSentences());
            System.out.println(word.getPhrases());
            System.out.println(word.getTranslations());
        }
    }

    @Test
    public void testGetReviewWords(){
        List<Word> needReviewWords = memoryService.getNeedReviewWords("123456");
        for(Word word : needReviewWords){
            System.out.println(word.getWordID());
            System.out.println(word.getWord());
            System.out.println(word.getSentences());
            System.out.println(word.getPhrases());
            System.out.println(word.getTranslations());
        }
    }

    @Test
    public void testLearnAndReview() throws Exception {
//        memoryService.learnNewWord("123456",28);
//        memoryService.learnNewWord("123456",29);
//        memoryService.learnNewWord("123456",30);
//        memoryService.learnNewWord("123456",31);
        memoryService.reviewOldWord("123456",28);
        memoryService.reviewOldWord("123456",29);
        memoryService.reviewOldWord("123456",30);
        memoryService.reviewOldWord("123456",31);

        System.out.println("完成复习");

    }

    @Test
    public void testHutool(){

        String today = DateUtil.today();
        Date todayDate = DateUtil.parseDate(today);
        System.out.println(today);
        System.out.println(todayDate);
        DateTime time = DateUtil.offsetDay(todayDate, 20);
        System.out.println(time);
    }
}
