package com.javaee.wordtree;

import cn.hutool.core.io.FileUtil;
import com.javaee.wordtree.mapper.PhraseMapper;
import com.javaee.wordtree.mapper.SentenceMapper;
import com.javaee.wordtree.mapper.TranslationMapper;
import com.javaee.wordtree.mapper.WordMapper;
import com.javaee.wordtree.util.JsonHelper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.io.*;

/**
 * @author DaY1zz
 * @create 2021-11-22-15:06
 */
@SpringBootTest
public class ResolveJsonTest {

    @Resource
    private WordMapper wordMapper;

    @Resource
    private PhraseMapper phraseMapper;

    @Resource
    private SentenceMapper sentenceMapper;

    @Resource
    private TranslationMapper translationMapper;

    @Test
    public void testResolveJson() {

        //四级
        File file1 = new File("D:\\VS2019\\Project\\WordTree\\WordTree\\WordTree\\WordTree\\Words\\VocabularyDic\\Words.json");
        //六级
        File file2 = new File("C:\\Users\\DaY1zz\\Desktop\\CET6luan_1.json");
        //高考
        File file3 = new File("C:\\Users\\DaY1zz\\Desktop\\GaoZhongluan_2.json");
        File[] files = {file1,file2,file3};
        for(File file : files){
            StringBuilder stringBuilder = new StringBuilder();
            BufferedReader bufferedReader = null;
            // 文件不存在
            if (!file.exists()) {
                return;
            }
            try {
                bufferedReader = new BufferedReader(new FileReader(file));
                String line = "";
                while ((line = bufferedReader.readLine()) != null) {
                    stringBuilder.append(line);
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (bufferedReader != null) {
                    try {
                        bufferedReader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
            //原Json文件的内容中的元素不是合格的数组形式
            String s = stringBuilder.toString().replace("{\"wordRank\"", ",{\"wordRank\"");
            JsonHelper jsonHelper = new JsonHelper(wordMapper,phraseMapper,sentenceMapper,translationMapper);
            jsonHelper.analyseDefaultAndSave("[" + s.substring(1) + "]");

        }

    }
}

