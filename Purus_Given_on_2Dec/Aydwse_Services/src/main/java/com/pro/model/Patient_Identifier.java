package com.pro.model;

import lombok.Data;

@Data
public class Patient_Identifier {
	
	private String use;
	
	private Patient_Type type;
	
	private String system;
	
	private String value;
	
	private Patient_Period period;
	
	private Patient_Assigner assigner;
	

}
