package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class DoctorDetailsAddress {
private String use;
private List<String> line;
private String city;
private String postalCode;
private String country;
	
	
}
