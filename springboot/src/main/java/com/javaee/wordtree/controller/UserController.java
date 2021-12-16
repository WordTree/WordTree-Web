package com.javaee.wordtree.controller;

import com.javaee.wordtree.common.Result;
import com.javaee.wordtree.entity.User;
import com.javaee.wordtree.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        User result = null;
        try {
            result = userService.loginVerify(user);
            return Result.success(result);
        } catch (Exception e) {
            return Result.error("-1", e.getMessage());
        }



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

    @PutMapping
    public Result<?> updateUser(@RequestBody User user){
        userService.updateUser(user);
        return Result.success();
    }

    @GetMapping()
    public Result<?> updatePassword(@RequestParam String userID,
                                    @RequestParam String password,
                                    @RequestParam String newPassword){
        try {
            userService.updatePassword(userID,password,newPassword);
            return Result.success();
        } catch (Exception e) {
            return Result.error("-1",e.getMessage());
        }
    }

    @GetMapping("/{userID}")
    public Result<?> getUser(@PathVariable String userID){
        User result = userService.getUserByID(userID);
        return Result.success(result);
    }

}
