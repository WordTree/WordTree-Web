package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.github.jeffreyning.mybatisplus.anno.MppMultiId;
import lombok.Data;

import java.util.Date;

/**
 * @author DaY1zz
 * @create 2021-11-29-14:32
 */
@Data
@TableName("date_record")
public class DateRecord {

    @TableId(value = "userID",type = IdType.INPUT)
    private String userID;

    private Date date;

    private int learnCount;

    private int reviewCount;

    private int learningTime;

}
