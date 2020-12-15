package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "appointments")

public class Appointments 
{
	
	@Id
	private String id;
	private Patient_Appointment patient;
	private Doctor_Appointment doctor;
	private Organization_Appointment organization;
	private String created_time;
	private String duration;
	private Appointment_Type_Appointment appointment_type;
	

	
	

}
