package com.javaee.wordtree.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.StrUtil;
import com.javaee.wordtree.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

/**
 * @author DaY1zz
 * @create 2021-09-13-20:35
 */

@RestController
@RequestMapping("/files")
public class FileController {

    @Value("${server.port}")
    private String port;    //读取配置文件中的端口号

    private static final String IP = "http://localhost";   //ip

    /***
     * 上传文件接口
     * @param file
     * @return
     */
    @PostMapping("/upload")
    public Result<?> upload(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String rootPath = System.getProperty("user.dir");    //定位到的当前用户目录("user.dir")（即项目工程根目录）

        String flag = StrUtil.uuid();   //生成文件唯一ID
        String filePath = rootPath + "/springboot/src/main/resources/files/" + flag + "_" + fileName;   //目标路径
        FileUtil.writeBytes(file.getBytes(), filePath);

        return Result.success(IP + ":" + port + "/files/" + flag);
    }

    /**
     * 返回文件接口
     *
     * @param flag
     * @param response
     */
    @GetMapping("{flag}")
    public void download(@PathVariable String flag, HttpServletResponse response) {
        OutputStream os = null;
        String basePath = System.getProperty("user.dir") + "/springboot/src/main/resources/files/";   //目标文件夹路径
        List<String> fileNames = FileUtil.listFileNames(basePath);    //获取所有文件的名称
        String target = fileNames.stream().filter(name -> name.contains(flag)).findAny().orElse("");  //匹配flag

        try {
            if (StrUtil.isNotEmpty(target)) {
                byte[] bytes = FileUtil.readBytes(basePath + target);
                os = response.getOutputStream();     //通过response的输出流返回文件
                os.write(bytes);
                os.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
