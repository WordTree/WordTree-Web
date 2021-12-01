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
        result.setPassword(null);
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

    public void updateUser(User user){
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User oringinalUser = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()));
        user.setPassword(oringinalUser.getPassword());
        userMapper.updateById(user);
    }

    public void updatePassword(String userID, String password, String newPassword) throws Exception {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User user = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID,userID));

        if(!user.getPassword().equals(password))
            throw new Exception("输入的原密码错误");
        user.setPassword(newPassword);
        userMapper.updateById(user);
    }

    public User getUserByID(String userID) {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        return userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID,userID));

    }
}
