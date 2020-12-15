package com.pro.model;
import java.util.List;
import lombok.Data;

@Data
public class Patient_Contact_Address {
	
	private String use;
	private String type;
	private List<String> line;
	private String city;
	private String district;
	private String state;
	private String postalCode;
	private Patient_Contact_Address_Period period;
	
	
	


}
