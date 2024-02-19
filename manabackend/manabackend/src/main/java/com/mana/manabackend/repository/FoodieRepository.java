package com.mana.manabackend.repository;

import com.mana.manabackend.model.foodie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodieRepository extends JpaRepository<foodie,String> {

}
