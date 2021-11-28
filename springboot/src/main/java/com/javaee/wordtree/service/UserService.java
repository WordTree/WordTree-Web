package com.javaee.wordtree.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.javaee.wordtree.entity.User;
import com.javaee.wordtree.mapper.UserMapper;
import org.springframework.context.ApplicationContextException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author DaY1zz
 * @create 2021-11-28-13:51
 */

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;


    public User loginVerify(User user){
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User result = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()).eq(User::getPassword, user.getPassword()));
        return result;
    }

    public void register(User user) throws Exception {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User result = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()));

        if(result != null)  //该账号已存在
            throw new Exception("该账号已存在");
        else
            userMapper.insert(user);
    }





}
