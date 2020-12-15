package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "user_registartion")
public class UserRegistartion {
	@Id
	private String id;
	private String first_name;
	private String last_name;
	private String email;
	private String password;
	private String phone_number;
	private String clinic_number;
	private String gender;
	private String dob;
	private String term_Conditions;
	private Organization organization;
	private List<Roles> roles;
	private Address address;
	private Profile profile;
}
