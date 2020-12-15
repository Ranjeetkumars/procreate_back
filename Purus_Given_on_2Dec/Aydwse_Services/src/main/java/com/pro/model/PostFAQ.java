package com.pro.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "faqs")
public class PostFAQ {
	@Id
	private String id;
	private SectionFAQ section;
	private String question;
	private CreatorFAQ creator;
	private String created_at;
	private String answer;
	
	

}
