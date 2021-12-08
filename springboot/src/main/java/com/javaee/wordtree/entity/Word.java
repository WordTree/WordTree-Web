package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-22-11:03
 */
@TableName("word")
@Data
public class Word {
    @TableId(value = "wordID",type = IdType.AUTO)
    private int wordID;
    //单词
    private String word;
    //英音音标
    private String ukPhone;
    //美音音标
    private String usPhone;
    //助记
    private String remMethod;
    //图片url
    private String picUrl;
    //归属词书
    private String belongBook;

    //词义
    @TableField(exist = false)
    private List<Translation> translations;

    //短语
    @TableField(exist = false)
    private List<Phrase> phrases;

    //例句
    @TableField(exist = false)
    private List<Sentence> sentences;




}
