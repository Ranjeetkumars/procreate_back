package com.pro.model;

import lombok.Data;

@Data
public class Account_Information {
	private String account_holder_name;
	private String account_number;
	private Bank bank;
	private String IFSC_Code;
	

}
