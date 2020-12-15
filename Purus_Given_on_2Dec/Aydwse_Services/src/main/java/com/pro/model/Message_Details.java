package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "message_info")
public class Message_Details 
{
	@Id
	private String id;
	private Sender sender;
	private Receiver receiver;
	private Message_Organization organization;
	private String text;
	private String created_at;
	private Message_Type type;
	private String path;
	

}
