package com.javaee.wordtree.util;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.javaee.wordtree.entity.Phrase;
import com.javaee.wordtree.entity.Sentence;
import com.javaee.wordtree.entity.Translation;
import com.javaee.wordtree.entity.Word;
import com.javaee.wordtree.jsonobject.JsonPhrase;
import com.javaee.wordtree.jsonobject.JsonSentence;
import com.javaee.wordtree.jsonobject.JsonTran;
import com.javaee.wordtree.jsonobject.JsonWord;
import com.javaee.wordtree.mapper.PhraseMapper;
import com.javaee.wordtree.mapper.SentenceMapper;
import com.javaee.wordtree.mapper.TranslationMapper;
import com.javaee.wordtree.mapper.WordMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Json解析工具类
 */
public class JsonHelper {

    private static final String TAG = "JsonHelper";

    // 采用Google的GSON开源框架
    public  Gson gson = new Gson();

    private WordMapper wordMapper;

    private PhraseMapper phraseMapper;

    private SentenceMapper sentenceMapper;

    private TranslationMapper translationMapper;

    public JsonHelper(WordMapper wordMapper, PhraseMapper phraseMapper, SentenceMapper sentenceMapper, TranslationMapper translationMapper) {
        this.wordMapper = wordMapper;
        this.phraseMapper = phraseMapper;
        this.sentenceMapper = sentenceMapper;
        this.translationMapper = translationMapper;
    }

    /**
     *  解析默认词库数据文件，并存放到数据库中
     * @param jsonContent json文件内容
     */
    public  void analyseDefaultAndSave(String jsonContent) {

        // 解析的数据格式
        List<JsonSentence> jsonSentences = new ArrayList<>();
        List<JsonTran> jsonTrans = new ArrayList<>();
        List<JsonPhrase> jsonPhrases = new ArrayList<>();
        List<JsonWord> jsonWordList = gson.fromJson(jsonContent, new TypeToken<List<JsonWord>>() {}.getType());
        for (JsonWord jsonWord : jsonWordList) {
            Word word = new Word();
            // 设置单词
            word.setWord(jsonWord.getHeadWord());
            // 设置音标
            if (jsonWord.getContent().getWord().getContent().getUkphone() != null) {
                if (!jsonWord.getContent().getWord().getContent().getUkphone().contains(";"))
                    word.setUkPhone("[" + jsonWord.getContent().getWord().getContent().getUkphone() + "]");
                else
                    word.setUkPhone("[" + jsonWord.getContent().getWord().getContent().getUkphone().split(";")[0] + "]");
            }
            if (jsonWord.getContent().getWord().getContent().getUsphone() != null) {
                if (!jsonWord.getContent().getWord().getContent().getUsphone().contains(";"))
                    word.setUsPhone("[" + jsonWord.getContent().getWord().getContent().getUsphone() + "]");
                else
                    word.setUsPhone("[" + jsonWord.getContent().getWord().getContent().getUsphone().split(";")[0] + "]");
            }
            // 设置图片
            if (jsonWord.getContent().getWord().getContent().getPicture() != null)
                word.setPicUrl(jsonWord.getContent().getWord().getContent().getPicture());
            // 设置巧记
            if (jsonWord.getContent().getWord().getContent().getRemMethod() != null)
                word.setRemMethod(jsonWord.getContent().getWord().getContent().getRemMethod().getVal());
            // 设置归属书目
            word.setBelongBook(jsonWord.getBookId());
            // 保存后，word自动设置插入数据库后的id值
            wordMapper.insert(word);
            /*至此，单词的基本内容已经保存，接下来把其他表的数据保存并绑定到这个单词上*/
            // 设置短语
            if (jsonWord.getContent().getWord().getContent().getPhrase() != null) {
                jsonPhrases = jsonWord.getContent().getWord().getContent().getPhrase().getPhrases();
                //短语只取前三个
                JsonPhrase jsonPhrase;
                for(int i = 0; i<Math.min(jsonPhrases.size(), 3); i++){
                    Phrase phrase = new Phrase();
                    jsonPhrase = jsonPhrases.get(i);
                    phrase.setCnPhrase(jsonPhrase.getpCn());
                    phrase.setEnPhrase(jsonPhrase.getpContent());
                    phrase.setWordID(word.getWordID());
                    // 保存
                    phraseMapper.insert(phrase);
                }

            }
            // 设置释义
            jsonTrans = jsonWord.getContent().getWord().getContent().getTrans();
            for (JsonTran jsonTran : jsonTrans) {
                Translation translation = new Translation();
                translation.setWordType(jsonTran.getPos());
                translation.setCnTran(jsonTran.getTranCn().replace("；；", ";").replace(",","，"));
                translation.setEnTran(jsonTran.getTranOther());
                translation.setWordID(word.getWordID());
                // 保存
                translationMapper.insert(translation);
            }
            // 设置例句
            if (jsonWord.getContent().getWord().getContent().getSentence() != null) {
                jsonSentences = jsonWord.getContent().getWord().getContent().getSentence().getSentences();
                for (JsonSentence jsonSentence : jsonSentences) {
                    Sentence sentence = new Sentence();
                    sentence.setCnSentence(jsonSentence.getsCn());
                    sentence.setEnSentence(jsonSentence.getsContent());
                    sentence.setWordID(word.getWordID());
                    sentenceMapper.insert(sentence);
                }
            }
            System.out.println(word.getWord()+" 保存到数据库");
            // 清空数据，防止重复
            jsonPhrases.clear();
            jsonSentences.clear();
            jsonTrans.clear();
        }
    }

}
