package com.javaee.wordtree.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.jeffreyning.mybatisplus.base.MppBaseMapper;
import com.javaee.wordtree.entity.DateRecord;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-29-14:43
 */
public interface DateRecordMapper extends BaseMapper<DateRecord> {

    List<DateRecord> findLatestSevenDaysData(String userID);
}
