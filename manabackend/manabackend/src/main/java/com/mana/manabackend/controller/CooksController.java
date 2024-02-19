package com.mana.manabackend.controller;


import com.mana.manabackend.model.cooksmodel;
import com.mana.manabackend.services.CooksService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cooksdata")
public class CooksController {

    CooksService cookserv;



    public CooksController(CooksService cookserv) {
        this.cookserv = cookserv;
    }



    @GetMapping("{cooksid}")
    public cooksmodel getcookdetails(@PathVariable("cooksid") String cookid){
        return cookserv.getcooksdata(cookid);
    }
    @GetMapping()
    public List<cooksmodel> getallcookdetails(){
        return cookserv.getallcooksdata();
    }
    @PostMapping
    public String creatcookdetails(@RequestBody cooksmodel cm){
        cookserv.createcooksdata(cm);
        return "cooks data created successfuly";
    }
    @PutMapping
    public String updatecookdetails(@RequestBody cooksmodel cm){
        cookserv.createcooksdata(cm);
        return "cooks data updated successfuly";
    }
    @DeleteMapping("{cooksid}")
    public String deletecookdetails(@PathVariable("cooksid") String cookid){
        cookserv.deletecooksdata(cookid);
        return "deleted cook details successfuly";
    }


}
