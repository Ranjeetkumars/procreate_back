package com.pro.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "contact    ")
public class ContactForm 
{
@Id
private String id;
private String message;
private String created_at;
private String name;
private String email;
private String phone_number;
private String remarks;
}
