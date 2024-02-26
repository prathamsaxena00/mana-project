package com.mana.manabackend.repository;

import com.mana.manabackend.model.cooksmodel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CooksRepository extends JpaRepository<cooksmodel,String> {
}
