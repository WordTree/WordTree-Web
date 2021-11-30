package com.javaee.wordtree.common;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

/**
 * 统计页面 柱状图数据封装类
 *
 * @author DaY1zz
 * @create 2021-11-29-19:09
 */
@Data
public class ColumnData {

    @JsonFormat(pattern = "MM-dd", timezone = "GMT+8")
    private Date date;
    private int value;
    private String type;
}
