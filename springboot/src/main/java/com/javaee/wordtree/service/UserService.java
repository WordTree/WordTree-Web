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


    /**
     * 登录验证业务
     * @param user
     * @return 返回登录用户的信息
     */
    public User loginVerify(User user) throws Exception {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User result = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()).eq(User::getPassword, user.getPassword()));
        if(result!=null){
            result.setPassword(null);
            return result;
        }else{
            throw new Exception("用户名或密码错误");
        }
    }

    /**
     * 注册账号业务
     * @param user
     * @throws Exception
     */
    public void register(User user) throws Exception {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User result = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()));

        if(result != null)  //该账号已存在
            throw new Exception("该账号已存在");
        else
            userMapper.insert(user);
    }

    /**
     * 修改用户信息业务
     * @param user
     */
    public void updateUser(User user){
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User oringinalUser = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID, user.getUserID()));
        user.setPassword(oringinalUser.getPassword());
        userMapper.updateById(user);
    }

    /**
     * 修改用户安全信息业务
     * @param userID
     * @param password
     * @param newPassword
     * @throws Exception
     */
    public void updatePassword(String userID, String password, String newPassword) throws Exception {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        User user = userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID,userID));

        if(!user.getPassword().equals(password))
            throw new Exception("输入的原密码错误");
        user.setPassword(newPassword);
        userMapper.updateById(user);
    }

    /**
     * 根据用户ID查询目标用户
     * @param userID
     * @return
     */
    public User getUserByID(String userID) {
        LambdaQueryWrapper<User> userLambdaQueryWrapper = Wrappers.lambdaQuery();
        return userMapper.selectOne(userLambdaQueryWrapper.eq(User::getUserID,userID));

    }
}
