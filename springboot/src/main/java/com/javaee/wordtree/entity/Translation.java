package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author DaY1zz
 * @create 2021-11-22-11:04
 */
@TableName("translation")
@Data
public class Translation {

    @TableId(value = "translationID",type = IdType.AUTO)
    public int translationID;

    // 英文词意
    private String enTran;

    // 中文词意
    private String cnTran;

    // 词性
    private String wordType;

    // 归属单词
    @TableField(value = "wordID")
    private int wordID;
}
