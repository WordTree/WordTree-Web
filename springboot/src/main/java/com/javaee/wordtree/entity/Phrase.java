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

@TableName("phrase")
@Data
public class Phrase {

    @TableId(value = "phraseID",type = IdType.AUTO)
    public int phraseID;

    // 英语短语
    private String enPhrase;

    // 中文短语
    private String cnPhrase;

    // 归属单词
    @TableField(value = "wordID")
    private int wordID;



}
