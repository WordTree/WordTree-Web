package com.javaee.wordtree.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.javaee.wordtree.common.CircleData;
import com.javaee.wordtree.entity.MmryRecord;

import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-11-29-21:14
 */
public interface MmryRecordMapper extends BaseMapper<MmryRecord> {

    List<CircleData> findMmryPercentage(String userID);

    int findNeedReviewWordCount(String userID);

    int findLearnedWordCount(String userID);

    List<Integer> findNeedReviewWordsID(String userID);
}
