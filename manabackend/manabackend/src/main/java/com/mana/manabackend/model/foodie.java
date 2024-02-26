package com.mana.manabackend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "foodies")
public class foodie {

    @Id
    private String foodieid;
    private String fname;
    private String femail;
    private  String fpassword;
    private String fphonecode;
    private String fphonenumber;

    public foodie() {
    }

    public foodie(String foodieid, String fname, String femail, String fpassword, String fphonecode, String fphonenumber) {
        this.foodieid = foodieid;
        this.fname = fname;
        this.femail = femail;
        this.fpassword = fpassword;
        this.fphonecode = fphonecode;
        this.fphonenumber = fphonenumber;

    }

    public String getFoodieid() {
        return foodieid;
    }

    public void setFoodieid(String foodieid) {
        this.foodieid = foodieid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getFemail() {
        return femail;
    }

    public void setFemail(String femail) {
        this.femail = femail;
    }

    public String getFpassword() {
        return fpassword;
    }

    public void setFpassword(String fpassword) {
        this.fpassword = fpassword;
    }

    public String getFphonecode() {
        return fphonecode;
    }

    public void setFphonecode(String fphonecode) {
        this.fphonecode = fphonecode;
    }

    public String getFphonenumber() {
        return fphonenumber;
    }

    public void setFphonenumber(String fphonenumber) {
        this.fphonenumber = fphonenumber;
    }
}
