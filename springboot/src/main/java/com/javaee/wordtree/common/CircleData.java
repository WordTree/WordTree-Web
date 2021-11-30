package com.javaee.wordtree.common;

import lombok.Data;


/**
 * 统计页面 饼图数据封装类
 *
 * @author DaY1zz
 * @create 2021-11-29-21:16
 */
@Data
public class CircleData {

    private int phase;
    private float value;
    private String type;
}
