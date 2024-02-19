package com.mana.manabackend.controller;

import com.mana.manabackend.model.foodie;
import com.mana.manabackend.services.FoodieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foodiesdata")
public class FoodieController {

    FoodieService fs;

    public FoodieController(FoodieService fs) {
        this.fs = fs;
    }

    @GetMapping("{foodieid}")
    public foodie getfoodiedetail(@PathVariable ("foodieid") String foodieid){
        return fs.getfoodiedata(foodieid);
    }
    @GetMapping
    public List<foodie> getallfoodiedetails(){
        return fs.getallfoodiesdata();
    }
    @PostMapping
    public String createfoodiedetails(foodie fd){
        fs.createfoodiesdata(fd);
        return "foodie data uploaded successfully";
    }
    @PutMapping
    public String updatefoodiedetails(foodie fd){
        fs.createfoodiesdata(fd);
        return "foodie data updated successfully";
    }

    @DeleteMapping("{foodieid}")
    public String deletefoodiedetails(@PathVariable ("foodieid") String foodieid){
        fs.deletefoodiesdata(foodieid);
        return "data deleted successfuly";
    }

}
