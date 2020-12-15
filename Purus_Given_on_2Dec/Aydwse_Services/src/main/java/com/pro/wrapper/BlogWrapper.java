package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Blog;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BlogWrapper extends Response  implements Serializable {

	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<Blog> response;
	private List<Blog> blog;
	private String  listOfData;
	
	
}
