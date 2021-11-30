package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author DaY1zz
 * @create 2021-11-22-11:03
 */
@TableName("sentence")
@Data
public class Sentence {

    @TableId(value = "sentenceID",type = IdType.AUTO)
    private int sentenceID;

    // 英文句子
    private String enSentence;

    // 中文句子
    private String cnSentence;

    // 归属单词
    @TableField(value = "wordID")
    private int wordID;

}
