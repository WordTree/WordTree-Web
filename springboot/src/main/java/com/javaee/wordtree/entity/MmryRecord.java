package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @author DaY1zz
 * @create 2021-11-29-21:11
 */
@Data
@TableName("memory_record")
public class MmryRecord {

    @TableId(value = "wordID",type = IdType.INPUT)
    private int wordID;

    @TableField(value = "userID")
    private String userID;

    private Date nextMmryTime;

    private int phase;



}
