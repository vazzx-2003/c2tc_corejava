package com.c2tc.vasa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.c2tc.vasa.entity.shop;
import com.c2tc.vasa.repository.shopreposit;
@Service
@Transactional
public class Userservice {
	@Autowired
	private shopreposit repo;
	
	
	public List<shop> getAllshops(int shopid)
	{
		return repo.findAll();
	
	}
	
	public shop getshop( int shopid) {
		return repo.findById(shopid).get();
	
	}
	public shop createshop( shop shop) {
		return repo.save(shop);
	}
	public shop updateshop( int shopid) {
		shop shop=repo.findById(shopid).get();
		shop.setName("vasanth");
		shop.setCategory("credit");
		repo.save(shop);
		return shop;
	}
	public void deleteshop( int shopid) {
		shop shop=repo.findById(shopid).get();
		repo.delete(shop);
	}

	public Optional<shop> updateshop(int shopid, shop updatedshop) {
		// TODO Auto-generated method stub
		return null;
	}
	public List<shop> ListAll() throws Exception
	{
		List<shop> values = repo.findAll();
		 if (values.isEmpty()) 
		 {
	            throw new Exception("No placements found");
	     }
		 
		return repo.findAll();
	}
}