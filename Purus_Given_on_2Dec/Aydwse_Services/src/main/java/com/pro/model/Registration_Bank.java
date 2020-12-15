package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "bank_info")

public class Registration_Bank 
{
	@Id
	private String id;
	private String name;
	
	

}
