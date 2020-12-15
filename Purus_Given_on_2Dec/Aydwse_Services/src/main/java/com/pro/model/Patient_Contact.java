package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class Patient_Contact {
	
	private List<Patient_Contact_Relationship> relationship;
	
	private Patient_Contact_Name name;
	
	private List<Patient_Contact_Telecom> telecom;
	
	private Patient_Contact_Address address;
	
	private String gender;
	
	private Patient_Contact_Period period;
	

}
