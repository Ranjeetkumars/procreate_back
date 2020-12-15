package com.pro.model;


import lombok.Data;

@Data
public class Address {
	private String  id;
	private String line1;
	private String line2;
	private String city;
	private State state;

}
