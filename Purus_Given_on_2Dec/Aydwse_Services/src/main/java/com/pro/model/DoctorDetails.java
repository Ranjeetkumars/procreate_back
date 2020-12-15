package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("doctor_Details")
public class DoctorDetails {
	@Id
	private String id;
	private String resourceType;
	private DoctorDetailsText text;
	private List<DoctorDetailsIdentifier> identifier;
	private List<DoctorDetailsName> name;
	private List<DoctorDetailsTelecom> telecom;
	private List<DoctorDetailsAddress> address;
	private String gender;
	private String birthDate;
	
	
	
}
