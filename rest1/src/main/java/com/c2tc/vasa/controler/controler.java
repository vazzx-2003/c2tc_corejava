package com.c2tc.vasa.controler;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.c2tc.vasa.entity.shop;
import com.c2tc.vasa.repository.shopreposit;
@RestController
public class controler {
	@Autowired
	shopreposit repo;
	@GetMapping("/shops")
	public List<shop> getshop()
	{
		List<shop> shops=repo.findAll();
		return shops;
	}
	@GetMapping("/shops/{shopid}")
	public shop getshop(@PathVariable int shopid) {
		shop shop=repo.findById(shopid).get();
		return shop;
	}
	@PostMapping("/shop/add")
	public void createshop(@RequestBody shop shop) {
		repo.save(shop);
	}
	@PutMapping("/shop/update/{shopid}")
	public shop updateshop(@PathVariable int shopid) {
		shop shop=repo.findById(shopid).get();
		shop.setName("vasanth");
		shop.setCategory("credit");
		repo.save(shop);
		return shop;
	}
	@DeleteMapping("/shop/delete/{shopid}")
	public void deleteshop(@PathVariable int shopid) {
		shop shop=repo.findById(shopid).get();
		repo.delete(shop);
	}

}
