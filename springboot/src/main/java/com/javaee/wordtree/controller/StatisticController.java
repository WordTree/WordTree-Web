package com.javaee.wordtree.controller;

import com.javaee.wordtree.common.*;
import com.javaee.wordtree.service.StatisticService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-29-19:21
 */
@RestController
@RequestMapping("/statistic")
public class StatisticController {

    @Resource
    StatisticService statisticService;

    @GetMapping("/{userID}/{belongBook}")
    public Result<?> getStatistics(@PathVariable String userID,@PathVariable String belongBook){

        List<LineData> lineChartData = statisticService.findLatestSevenDaysTimeData(userID);
        List<ColumnData> columnChartData = statisticService.findLatestSevenDaysWordData(userID);
        List<CircleData> circleChartData = statisticService.findMmryPercentage(userID);
        int learnedWordCount = statisticService.getLearnedWordCount(userID);
        int totalWordCount = statisticService.getTotalWordCount(belongBook);
        int needReviewWordCount = statisticService.getNeedReviewWordCount(userID);

        StatisticData statisticData = new StatisticData(needReviewWordCount,learnedWordCount,totalWordCount,columnChartData,circleChartData,lineChartData);
        return Result.success(statisticData);

    }

}
