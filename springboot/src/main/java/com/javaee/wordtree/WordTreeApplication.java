package com.javaee.wordtree;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author DaY1zz
 * @create 2021-11-22-11:07
 */

@SpringBootApplication
@MapperScan("com.javaee.wordtree.mapper")
public class WordTreeApplication {
    public static void main(String[] args) {
        SpringApplication.run(WordTreeApplication.class,args);
    }
}
