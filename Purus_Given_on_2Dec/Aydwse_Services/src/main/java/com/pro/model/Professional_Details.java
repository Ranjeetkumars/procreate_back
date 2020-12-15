package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class Professional_Details {
	private String profile_img;
	private String medical_registration_number;
	private List<Qualifications> qualifications;
	private List<Specialization> specialization;
	private String experince_in_years;
	private Awards_Recognitions awards_Recognitions;
	private Account_Information account_Information;
	private Consultation_Fees consultation_Fees;

}
