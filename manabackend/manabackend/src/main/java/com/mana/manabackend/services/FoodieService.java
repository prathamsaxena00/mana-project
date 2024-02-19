package com.mana.manabackend.services;

import com.mana.manabackend.model.cooksmodel;
import com.mana.manabackend.model.foodie;

import java.util.List;

public interface FoodieService {
    public foodie getfoodiedata(String foodieid);

    public List<foodie> getallfoodiesdata();

    public String createfoodiesdata(foodie fd);
    public String updatefoodiesdata(foodie fd);
    public String deletefoodiesdata(String foodieid);
}
