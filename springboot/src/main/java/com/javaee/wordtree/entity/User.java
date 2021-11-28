package com.javaee.wordtree.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author DaY1zz
 * @create 2021-11-28-13:52
 */
@Data
@TableName("user")
public class User {

    //用户ID
    @TableId(value = "userID",type = IdType.INPUT)
    String userID;

    //用户名称
    String userName;

    //用户密码
    String password;

    //用户头像URL
    String avator;

    //用户所选词书
    String targetBook;

}
