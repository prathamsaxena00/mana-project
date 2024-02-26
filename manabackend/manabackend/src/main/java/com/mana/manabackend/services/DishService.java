package com.mana.manabackend.services;

import com.mana.manabackend.model.dishmodel;

import java.util.List;

public interface DishService {

    public dishmodel getdish(String dishid);
    public List<dishmodel> getalldish();
    public String createdish(dishmodel dd);
    public String updatedish(dishmodel dd);
    public String deteltedish(String dishid);


}
