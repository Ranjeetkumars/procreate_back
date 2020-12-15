package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Document(collection = "Blog_info")
@Data
public class Family
{
	private String resourceType;
	@Id
	private String id;
	private Blog_Text text;
	private List<Blog_Identifier> identifier;
	private String active;
	private Blog_Patient patient;
	private List<Blog_Relationship> relationship;
	private List<Blog_Name> name;
    private List<Blog_Telecom> telecom;
    private String gender;
    private List<Blog_Address> address;
    private List<Blog_Photo> photo;
}
