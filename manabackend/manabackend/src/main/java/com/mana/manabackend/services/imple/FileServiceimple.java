package com.mana.manabackend.services.imple;


import com.mana.manabackend.services.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceimple implements FileService {

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        //file name

        String name =file.getOriginalFilename();


   // randome name generate
        String randomid= UUID.randomUUID().toString();
        String fileName1=randomid.concat(name.substring(name.lastIndexOf(".")));
        //full path
        String filePath =path + File.separator + fileName1;
        //create folder if not created
        File f = new File(path);
        if(!f.exists()){
            f.mkdir();
        }
        //file copy
        Files.copy(file.getInputStream(), Paths.get(filePath));


        return "uploaded "+name;
    }
}
