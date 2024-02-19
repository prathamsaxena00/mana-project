package com.mana.manabackend.services;

import com.mana.manabackend.model.cooksmodel;
import com.mana.manabackend.model.cooksmodel;

import java.util.List;

public interface CooksService {

    public cooksmodel getcooksdata(String cookid);

    public List<cooksmodel> getallcooksdata();

    public String createcooksdata(cooksmodel cm);
    public String updatecooksdata(cooksmodel cm);
    public String deletecooksdata(String cookid);

}
