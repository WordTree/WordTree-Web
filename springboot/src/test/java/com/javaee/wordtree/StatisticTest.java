package com.javaee.wordtree;

import com.javaee.wordtree.common.CircleData;
import com.javaee.wordtree.common.ColumnData;
import com.javaee.wordtree.common.LineData;
import com.javaee.wordtree.service.StatisticService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-29-15:37
 */
@SpringBootTest
public class StatisticTest {

    @Autowired
    StatisticService statisticService;

    @Test
    public void testDateStatistic(){
        List<ColumnData> records = statisticService.findLatestSevenDaysWordData("123456");
        System.out.println("-------------------");
        for(ColumnData columnData : records){
            System.out.println(columnData.getDate());
        }
    }

    @Test
    public void testMmryStatistic(){
        List<ColumnData> columnData = statisticService.findLatestSevenDaysWordData("123456");
        List<CircleData> records = statisticService.findMmryPercentage("123456");
        List<LineData> lineData = statisticService.findLatestSevenDaysTimeData("123456");
        System.out.println("-------------------");
        System.out.println(lineData);
        System.out.println(columnData);
        System.out.println(records);
        System.out.println(statisticService.getLearnedWordCount("123456"));
        System.out.println(statisticService.getTotalWordCount("CET4luan_1"));
        System.out.println(statisticService.getNeedReviewWordCount("123456"));
    }
}
