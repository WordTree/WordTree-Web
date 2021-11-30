package com.javaee.wordtree.common;

import lombok.Data;

import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-30-13:03
 */
@Data
public class StatisticData {
    private int reviewWordCount;  //今天需要复习的单词量
    private int learnedWordCount;  //已经学习的单词总量
    private int totalWordCount;  //需要学习的单词总量
    private List<ColumnData> columnChartData;
    private List<CircleData> circleChartData;
    private List<LineData> lineChartData;

    public StatisticData(int reviewWordCount, int learnedWordCount, int totalWordCount, List<ColumnData> columnChartData, List<CircleData> circleChartData, List<LineData> lineChartData) {
        this.reviewWordCount = reviewWordCount;
        this.learnedWordCount = learnedWordCount;
        this.totalWordCount = totalWordCount;
        this.columnChartData = columnChartData;
        this.circleChartData = circleChartData;
        this.lineChartData = lineChartData;
    }
}
