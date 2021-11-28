package com.javaee.wordtree.controller;

import com.javaee.wordtree.common.Result;
import com.javaee.wordtree.entity.User;
import com.javaee.wordtree.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author DaY1zz
 * @create 2021-11-28-14:09
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;


    @PostMapping("/login")
    public Result<?> login(@RequestBody User user){
        User result = userService.loginVerify(user);

        if(result==null)
            return Result.error("-1", "用户名或密码错误");
        return Result.success(result);
    }

    @PostMapping("/register")
    public Result<?> register(@RequestBody User user){
        try {

            userService.register(user);
            return Result.success();

        } catch (Exception e) {
            return Result.error("-1",e.getMessage());
        }
    }





}
