package com.c2tc.vasa;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import com.c2tc.vasa.entity.shop;
import com.c2tc.vasa.service.Userservice;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Shoptest {

    @Autowired
    private Userservice shopService;

    @Test
    public void testCreateShop() {
        shop shop = new shop();
        shop.setShopid(1);
        shop.setCategory("Electronics");
        shop.setEmpid(101);
        shop.setName("Tech Store");
        shop.setCust("John Doe");
        shop.setStatus("Open");
        shop.setOwner("Jane Doe");
        shop.setLeasests("2023-01-01");

        shop createdShop = shopService.createshop(shop);

        assertNotNull(createdShop);
        assertEquals(1, createdShop.getShopid());
        // Add more assertions for other fields if needed
    }

    @Test
    public void testDeleteShop() {
        int shopIdToDelete = 1;

        shopService.deleteshop(shopIdToDelete);

        // Check if the shop with the given ID is deleted
        assertNull(shopService.getshop(shopIdToDelete));
    }

    @Test
    public void testGetShopById() {
        int shopId = 1;

        shop shop = shopService.getshop(shopId);

        assertNotNull(shop);
        assertEquals(1, shop.getShopid());
        // Add more assertions for other fields if needed
    }
}
