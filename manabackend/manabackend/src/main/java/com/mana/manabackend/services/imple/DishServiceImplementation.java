package com.mana.manabackend.services.imple;

import com.mana.manabackend.model.dishmodel;
import com.mana.manabackend.repository.dishesrepository;
import com.mana.manabackend.services.DishService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishServiceImplementation implements DishService {

    dishesrepository  drjpa;

    public DishServiceImplementation(dishesrepository drjpa) {
        this.drjpa = drjpa;
    }

    @Override
    public dishmodel getdish(String dishid) {
        return drjpa.findById(dishid).get();
    }

    @Override
    public List<dishmodel> getalldish() {
        return drjpa.findAll();
    }

    @Override
    public String createdish(dishmodel dd) {
        drjpa.save(dd);
        return "uploaded successfuly";
    }

    @Override
    public String updatedish(dishmodel dd) {
        drjpa.save(dd);
        return "updated succesfuly";
    }

    @Override
    public String deteltedish(String dishid) {
        drjpa.deleteById(dishid);
        return "deleted successfuly";
    }
}
