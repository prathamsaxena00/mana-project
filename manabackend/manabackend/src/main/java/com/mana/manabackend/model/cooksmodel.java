package com.mana.manabackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;



@Entity
@Table(name="cooks")
public class cooksmodel {

    @Id
    private String cooksid;

    private String name;
    private String email;
    private String password;

    private String Address;
    private String city;
    private String pincode;
    private String state;
    private String phonecode;
    private String phonenumber;
    private String kitchenname;
    private List<String> speciality;

    public cooksmodel() {
    }

    public cooksmodel(String cooksid ,String name, String email, String password, String address, String city, String pincode, String state, String phonecode, String phonenumber, String kitchenname, List<String> speciality) {
        this.cooksid=cooksid;
        this.name = name;
        this.email = email;
        this.password = password;
        this.Address = address;
        this.city = city;
        this.pincode = pincode;
        this.state = state;
        this.phonecode = phonecode;
        this.phonenumber = phonenumber;
        this.kitchenname = kitchenname;
        this.speciality = speciality;
    }

    public String getCooksid() {
        return cooksid;
    }

    public void setCooksid(String cooksid) {
        this.cooksid = cooksid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhonecode() {
        return phonecode;
    }

    public void setPhonecode(String phonecode) {
        this.phonecode = phonecode;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getKitchenname() {
        return kitchenname;
    }

    public void setKitchenname(String kitchenname) {
        this.kitchenname = kitchenname;
    }

    public List<String> getSpeciality() {
        return speciality;
    }

    public void setSpeciality(List<String> speciality) {
        this.speciality = speciality;
    }
}
