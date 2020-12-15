package com.javasampleapproach.datamongodb.model;

public class Contact {
	private String address;
	private String phone;
	
	public Contact(String address, String phone){
		this.address = address;
		this.phone = phone;
	}
	
	public void setAddress(String address){
		this.address = address;
	}
	
	public String getAddress(){
		return this.address;
	}
	
	public void setPhone(String phone){
		this.phone = phone;
	}
	
	public String getPhone(){
		return this.phone;
	}
}
