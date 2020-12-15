package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Reminder_info")
public class Reminder {
	@Id
	private String id;

	private String created_at;
	private String message;
	private Reminder_Priority priority;

	private Reminder_Organization organization;

	private Reminder_Interaction interaction;

}
