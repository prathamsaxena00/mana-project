package com.mana.manabackend.repository;

import com.mana.manabackend.model.dishmodel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface dishesrepository extends JpaRepository<dishmodel,String> {
}
