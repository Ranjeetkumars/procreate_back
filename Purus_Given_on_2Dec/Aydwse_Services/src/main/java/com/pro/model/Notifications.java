package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "notification_info")
public class Notifications {
	@Id
	private String id;
	private List<Notification> notifications;
	
	
}
