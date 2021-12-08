package com.javaee.wordtree.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.javaee.wordtree.entity.Word;

import java.util.List;
import java.util.Map;

/**
 * @author DaY1zz
 * @create 2021-11-22-11:52
 */
public interface WordMapper extends BaseMapper<Word> {

    Word findWord(int wordID);

    List<Integer> findNewWordsID(Map<String,Object> map);

}
