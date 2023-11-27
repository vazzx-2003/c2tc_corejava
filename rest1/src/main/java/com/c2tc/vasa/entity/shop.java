package com.c2tc.vasa.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity 
@Table(name="shop")
public class shop {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private int shopid;
	@Column(name="category")
private String category;
	@Column(name="empid")
private int empid;
	@Column(name="name")
private String name;
	@Column(name="cust")
private String cust;
	@Column(name="status")
private String status;
	@Column(name="owner")
private String owner;
	@Column(name="leasests")
private String leasests;
	
	public shop()
	{
		
	}
	
	public shop(String category, int empid, String name, String cust, String status, String owner, String leasests) {
		super();
		this.category = category;
		this.empid = empid;
		this.name = name;
		this.cust = cust;
		this.status = status;
		this.owner = owner;
		this.leasests = leasests;
	}

	public int getShopid() {
		return shopid;
	}
	public void setShopid(int shopid) {
		this.shopid = shopid;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCust() {
		return cust;
	}
	public void setCust(String cust) {
		this.cust = cust;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getLeasests() {
		return leasests;
	}
	public void setLeasests(String leasests) {
		this.leasests = leasests;
	}
	@Override
	public String toString() {
		return "shop [shopid=" + shopid + ", category=" + category + ", empid=" + empid + ", name=" + name + ", cust="
				+ cust + ", status=" + status + ", owner=" + owner + ", leasests=" + leasests + "]";
	}
	
	
	
}
