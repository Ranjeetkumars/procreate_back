package com.pro.model;

import java.util.List;
import lombok.Data;

@Data
public class Patient_Contact_Name {
	
	private String family;
	
	private Patient_Contact_Name_Family  _family;
	
	private List<String> given;
	

}
