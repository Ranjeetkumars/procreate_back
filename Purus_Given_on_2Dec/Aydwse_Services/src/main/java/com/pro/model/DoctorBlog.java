package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.Data;

@Data
@Document(collection = "blog")
public class DoctorBlog {

	@Id
	private String id;
	private String blog_desc;
	private DoctorBlogOrganizations organization;
	private DoctorBlogDoctor doctor;
	private String attachment;
	private String video_url;
	private List<DoctorBlogStatus> status;	 
	private String likes_count;
	private String views_count;
	private String created_at;
	private String updated_at;
	private List<DoctorBlogComments> comments;
	private List<DoctorBlogLikes> likes;
	private List<DoctorBlogViews> views;
	
	
	

	
	
	
}
