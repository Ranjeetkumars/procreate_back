package com.pro.model;

import java.util.List;
import lombok.Data;

@Data
public class Patient_Name {
	
	private String use;
	private String family ;
	
	private List<String> given;
	
	private Patient_Name_Period period;

}
