package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data

@Document(collection = "patient")
public class Patient {
	
	@Id
	private String id;
	private String resourceType;
	
	private Patient_Text text;
	private List<Patient_Identifier> identifier;
	private Boolean active;
	private List<Patient_Name> name;
	private List<Patient_Telecom> telecom;
	private String gender;
	private String birthDate ;
	private Patient_Birthdate _birthDate;
	private Boolean deceasedBoolean;
	private List<Patient_Address> address;
	private List<Patient_Contact> contact;
	private Patient_Managingorganization  managingOrganization;
	
	
	
	
	
	
	
	
	
}
