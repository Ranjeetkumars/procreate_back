package com.pro.model;

import lombok.Data;

@Data
public class CallAppointmentDetails 
{
	private String id;
	private String booked_at;
	private String reason_for_appointment;
	private AppointmentDetailsSlot slot ;
}
