package com.mana.manabackend.services.imple;

import com.mana.manabackend.model.cooksmodel;
import com.mana.manabackend.repository.CooksRepository;
import com.mana.manabackend.services.CooksService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CookServiceImplementation implements CooksService {

    CooksRepository cooksjpa;

    public CookServiceImplementation(CooksRepository cooksjpa) {
        this.cooksjpa = cooksjpa;
    }

    @Override
    public cooksmodel getcooksdata(String cookid) {
       return  cooksjpa.findById(cookid).get();

    }

    @Override
    public List<cooksmodel> getallcooksdata() {
        return cooksjpa.findAll();
    }

    @Override
    public String createcooksdata(cooksmodel cm) {
        cooksjpa.save(cm);
        return "cooks data uploaded succesfully";
    }

    @Override
    public String updatecooksdata(cooksmodel cm) {
        cooksjpa.save(cm);
        return "cooks data updated succesfully";
    }

    @Override
    public String deletecooksdata(String cookid) {
        cooksjpa.deleteById(cookid);
        return "data deleted successfully";
    }
}
