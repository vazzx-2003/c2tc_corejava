package com.c2tc.vasa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.c2tc.vasa.entity.shop;

public interface shopreposit extends JpaRepository<shop, Integer>{

	List<shop> findAll();
 
}
