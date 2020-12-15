package com.pro.model;

import lombok.Data;

@Data
public class Patient_Telecom {
	
	private String use;
	
	private String system ;
	
	private String value;
	
	private String rank;
	
	private Patient_Telecom_Period period;
	

}
