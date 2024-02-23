package com.mana.manabackend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="dishes")
public class dishmodel {

    @Id
    private String dishid;
    private String kitchenname;
    private String dishname;
    private String description;
    private Integer price;
    private String category;
    private String type;
    private Boolean isavailable;

    public dishmodel() {
    }

    public dishmodel(String dishid, String kn, String dishname, String description, Integer price, String category, String type ,Boolean isavailable) {

        this.dishid = dishid;
        this.kitchenname=kn;
        this.dishname = dishname;
        this.description = description;
        this.price = price;
        this.category = category;
        this.type = type;
        this.isavailable=isavailable;
    }

    public Boolean getIsavailable() {
        return isavailable;
    }

    public void setIsavailable(Boolean isavailable) {
        this.isavailable = isavailable;
    }

    public String getKitchenname() {
        return kitchenname;
    }


    public void setKitchenname(String kitchenname) {
        this.kitchenname = kitchenname;
    }

    public String getDishid() {
        return dishid;
    }

    public void setDishid(String dishid) {
        this.dishid = dishid;
    }

    public String getDishname() {
        return dishname;
    }

    public void setDishname(String dishname) {
        this.dishname = dishname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
