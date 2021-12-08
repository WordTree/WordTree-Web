package com.javaee.wordtree;

import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.service.MemoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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
}
