package com.javaee.wordtree.common;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * 统计页面 曲线图数据封装类
 *
 * @author DaY1zz
 * @create 2021-11-29-19:09
 */
@Data
public class LineData {

    @JsonFormat(pattern = "MM-dd", timezone = "GMT+8")
    private Date date;
    private int time;

    public LineData(Date date, int time) {
        this.date = date;
        this.time = time;
    }
}
