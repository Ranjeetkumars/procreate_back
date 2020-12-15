package com.javasampleapproach.datamongodb.model;

public class Product {
	private String code;
	private String name;
	private String details;
	
	public Product(String code, String name, String details){
		this.code = code;
		this.name = name;
		this.details = details;
	}
	
	public void setCode(String code){
		this.code = code;
	}
	
	public String getCode(){
		return this.code;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public String getName(){
		return this.name;
	}
	
	public void setDetails(String details){
		this.details = details;
	}
	
	public String getDetails(){
		return this.details;
	}
}