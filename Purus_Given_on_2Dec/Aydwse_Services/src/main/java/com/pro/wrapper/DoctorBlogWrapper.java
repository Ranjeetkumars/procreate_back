package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.DoctorBlog;

import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class DoctorBlogWrapper extends Response  implements Serializable
{

	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<DoctorBlog> response;
	private List<DoctorBlog> blog;
	private String  listOfData;
	
	
	
}
