package com.mana.manabackend.controller;


import com.mana.manabackend.model.dishmodel;
import com.mana.manabackend.services.DishService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/dishes")

public class DishController {
    DishService ds;

    public DishController(DishService ds) {
        this.ds = ds;
    }

    @GetMapping("{dishid}")
    public dishmodel getdishdetails(@PathVariable("dishid") String dishid){
       return ds.getdish(dishid);

    }

    @GetMapping()
    public List<dishmodel> detalldishes(){
        return ds.getalldish();
    }
    @PostMapping
    public String createdishdetails(@RequestBody dishmodel dd){
        ds.createdish(dd);
        return "Created dish ";
    }
    @PutMapping
    public String updatedishdetails(@RequestBody dishmodel dd){
        ds.updatedish(dd);
        return "updated dish";
    }
    @DeleteMapping("{dishid}")
    public String detedishdetails(@PathVariable("dishid") String dishid){
        ds.deteltedish(dishid);
        return "deleted successfully";
    }
}
