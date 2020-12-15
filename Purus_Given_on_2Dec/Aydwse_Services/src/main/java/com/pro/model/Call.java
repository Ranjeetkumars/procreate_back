package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "calls")
public class Call 
{
@Id
private String id;
private CallCaller caller;
private CallReciver receiver;
private CallOrganization organization;
private String start_time;
private String end_time;
private  CallAppointmentDetails appointment_details;

}
