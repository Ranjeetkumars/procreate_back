package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("blogs")
public class Blog {

	@Id
	private String id;
	private String blog_desc;
	private BlogOrganization organization;
	private BlogDoctor doctor;
	private String attachment;
	private String video_url;
	private List<BlogStatus> status;
	private String likes;
	private String views;
	private String created_at;
	private String updated_at;
	
	
}
