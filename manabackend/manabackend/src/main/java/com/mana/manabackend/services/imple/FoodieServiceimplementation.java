package com.mana.manabackend.services.imple;

import com.mana.manabackend.model.foodie;
import com.mana.manabackend.repository.FoodieRepository;
import com.mana.manabackend.services.FoodieService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FoodieServiceimplementation implements FoodieService {

   FoodieRepository foodiejpa;

    public FoodieServiceimplementation(FoodieRepository foodiejpa) {
        this.foodiejpa = foodiejpa;
    }

    @Override
    public foodie getfoodiedata(String foodieid) {
        return  foodiejpa.findById(foodieid).get();
    }

    @Override
    public List<foodie> getallfoodiesdata() {
        return foodiejpa.findAll();
    }

    @Override
    public String createfoodiesdata(foodie fd) {
        foodiejpa.save(fd);
        return "foodie data uploaded succesfully";
    }

    @Override
    public String updatefoodiesdata(foodie fd) {
        foodiejpa.save(fd);
        return "foodie data updated succesfully";
    }

    @Override
    public String deletefoodiesdata(String foodieid) {
        foodiejpa.deleteById(foodieid);
        return "foodie data deleted succesfully";
    }
}
