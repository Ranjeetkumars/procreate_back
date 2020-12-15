package com.pro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pro.exceptions.DataNotFoundException;
import com.pro.exceptions.InSufficientInputException;
import com.pro.model.Blog;
import com.pro.repository.BlogRepository;
import com.pro.utils.Response;
import com.pro.wrapper.BlogWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/Blog")
@Slf4j

public class BlogController {

	@Autowired
	private BlogRepository blogRepository;
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * @author : Saiteja
	 * @throws DataNotFoundException
	 * @Date : 29-11-2020
	 * @Des : Input{

	"blog_desc": "Ranganath",
	"organization": {
		"id": 1,
		"type": "company",
		"name": "Procreate"
	},
	"doctor": {
		"id": 1,
		"name": "Ranagnth"
	},
	"attachment": "home/images/img1.jpg",
	"video_url": "https://docs.google.com/spreadsheets/d/1X4153253",

	"status": [{
			"value": {
				"id": 1,
				"name": "Active"
			},
			"updated_at": "12/24/2020 12:56:02"
		},
		{
			"value": {
				"id": 2,
				"name": "Inactive"
			},
			"updated_at": "12/22/2020 10:56:02"
		}, {
			"value": {
				"id": 3,
				"name": "pending"
			},
			"updated_at": "12/22/2020 10:56:02"
		}
	],
	"likes": "1",
	"views": "2",
	"created_at": "12/22/2020 10:56:02",
	"updated_at": "13/22/2020 10:56:02"
}
	 *  * @URL : http://localhost:9001/adwyse/Blog/addBlog 
	 */

	
	
	
	
	
@RequestMapping(value = "/addBlog", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public Response insertBlog(@RequestBody Blog blog)
			throws InSufficientInputException, DataNotFoundException {
	BlogWrapper wrapper = new BlogWrapper();
		String blogRegidterId = null;
			
		
		
		
		if ( blog.getBlog_desc() != null && blog.getOrganization() != null && blog.getDoctor() != null && blog.getAttachment() != null 
				&& blog.getVideo_url() != null && blog.getStatus() != null && blog.getLikes() != null && blog.getViews() != null 
			 && blog.getCreated_at() != null && blog.getUpdated_at() != null 
				 
				) 		
		
		{
			blogRegidterId = blogRepository.save(blog).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(blogRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(blog.toString());
		}

		return wrapper;
	}




/**
 * @author : Saiteja
 * @throws DataNotFoundException
 * @Date : 28-11-2020
 * @Des :" update  PUT:{
"id":"5fc3bd544cb3e20fa6077d12",
"blog_desc": "Ranganath",
"organization": {
	"id": 1,
	"type": "teja",
	"name": "Procreate"
},
"doctor": {
	"id": 1,
	"name": "Ranagnth"
},
"attachment": "home/images/img1.jpg",
"video_url": "https://docs.google.com/spreadsheets/d/1X4153253",

"status": [{
		"value": {
			"id": 1,
			"name": "Active"
		},
		"updated_at": "12/24/2020 12:56:02"
	},
	{
		"value": {
			"id": 2,
			"name": "Inactive"
		},
		"updated_at": "12/22/2020 10:56:02"
	}, {
		"value": {
			"id": 3,
			"name": "pending"
		},
		"updated_at": "12/22/2020 10:56:02"
	}
],
"likes": "1",
"views": "2",
"created_at": "12/22/2020 10:56:02",
"updated_at": "13/22/2020 10:56:02"
}
 *  * @URL : PUT : http://localhost:9001/adwyse/Blog/updateBlog
 * 
 */







@RequestMapping(value = "/updateBlog", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public Response updateBlog(@RequestBody Blog blog)
		throws InSufficientInputException, DataNotFoundException {
	BlogWrapper wrapper = new BlogWrapper();
	String blogRegidterId = null;
	

	if (blog.getBlog_desc() != null && blog.getOrganization() != null && blog.getDoctor() != null && blog.getAttachment() != null 
			&& blog.getVideo_url() != null && blog.getStatus() != null && blog.getLikes() != null && blog.getViews() != null 
		 && blog.getCreated_at() != null && blog.getUpdated_at() != null 
		) 
	
	
	{
		blogRegidterId = blogRepository.save(blog).getId();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setResponseId(blogRegidterId);
	} else {
		wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
		throw new InSufficientInputException(blog.toString());
	}

	return wrapper;
}




/**
 * @author : Saiteja
 * @throws DataNotFoundException
 * @Date : 28-11-2020
 * @Des :getAllBlogs
 *  * @URL : http://localhost:9001/adwyse/Blog/getAllBlogs
 * 
 */


@RequestMapping(value = "/getAllBlogs", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public Response getBlogDetails() throws DataNotFoundException {
	BlogWrapper wrapper = new BlogWrapper();
	List<Blog> listofData = blogRepository.findAll();
	wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
	wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
	//Blog oBlog = new Blog();
	//BeanUtils.copyProperties(listofData, oBlog);
	wrapper.setBlog(listofData);
	log.info("============ GETALLBLOGS ============"+listofData.toString());
	return wrapper;

}







	
	
}
