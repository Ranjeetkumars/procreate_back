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
import com.pro.model.DoctorBlog;
import com.pro.repository.DoctorBlogRepository;
import com.pro.utils.Response;
import com.pro.wrapper.DoctorBlogWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/doctorBlog")
@Slf4j
public class DoctorBlogController 

{
	@Autowired
	private DoctorBlogRepository blogRepository;
		

	/**
	 * @author : Saiteja
	 * @throws DataNotFoundException
	 * @Date : 04-12-2020
	 * @Des :Input :- {
  
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
    "updated_at": "2013-12-10T09:00:00Z"
  },
  {
    "value": {
      "id": 2,
      "name": "Inactive"
    },
    "updated_at": "2013-12-10T09:00:00Z"
  }, 
  {
    "value": {
      "id": 3,
      "name": "pending"
    },
    "updated_at": "2013-12-10T09:00:00Z"
  }],
  "likes_count": "1",
  "views_count": "2",
  "created_at": "2013-12-10T09:00:00Z",
  "updated_at": "2013-12-10T09:00:00Z",
  

  "comments": [{
    "commenter": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "message_type": {
      "id": 1,
      "name": "Text"
    },
    "message": "This is a message",
    "created_at": "2013-12-10T09:00:00Z",
    "likes_count": 10,
    "comment_likes": [{
      "liker": {
        "id": 10,
        "name": "Prithvi Prasad",
        "img": "remote_folder/images/img1.jpg"
      },
      "created_at": "2013-12-10T09:00:00Z"
      }]
    }
  ],


  "likes": [{
    "liker": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "created_at": "2013-12-10T09:00:00Z"
    }
  ],
  "views": [{
    "viewer": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "created_at": "2013-12-10T09:00:00Z"
    }
  ]
}
O/P:-
{
    "status": "OK",
    "responseCode": 200,
    "responseId": "1"
}
	 *  * @URL : http://localhost:9001/adwyse/doctorBlog/addDoctorBlog
	 * 
	 */

	
	
	
	@RequestMapping(value = "/addDoctorBlog", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public Response insertDoctorBlog(@RequestBody DoctorBlog blog)
			throws InSufficientInputException, DataNotFoundException {
		DoctorBlogWrapper wrapper = new DoctorBlogWrapper();
		String blogRegidterId = null;
			
		
		
		
		if ( blog.getBlog_desc() != null && blog.getOrganization() != null && blog.getDoctor() != null && blog.getAttachment() != null 
				&& blog.getVideo_url() != null && blog.getStatus() != null && blog.getLikes_count() != null
				&& blog.getViews_count() != null && blog.getCreated_at() != null && blog.getUpdated_at() != null && blog.getComments() != null
				&& blog.getLikes() != null && blog.getViews() != null 
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
	 * @Des :  For Update Input :- {
  "id": "1",
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
    "updated_at": "2013-12-10T09:00:00Z"
  },
  {
    "value": {
      "id": 2,
      "name": "Inactive"
    },
    "updated_at": "2013-12-10T09:00:00Z"
  }, 
  {
    "value": {
      "id": 3,
      "name": "pending"
    },
    "updated_at": "2013-12-10T09:00:00Z"
  }],
  "likes_count": "1",
  "views_count": "2",
  "created_at": "2013-12-10T09:00:00Z",
  "updated_at": "2013-12-10T09:00:00Z",
  

  "comments": [{
    "commenter": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "message_type": {
      "id": 1,
      "name": "Text"
    },
    "message": "This is a message",
    "created_at": "2013-12-10T09:00:00Z",
    "likes_count": 10,
    "comment_likes": [{
      "liker": {
        "id": 10,
        "name": "Prithvi Prasad",
        "img": "remote_folder/images/img1.jpg"
      },
      "created_at": "2013-12-10T09:00:00Z"
      }]
    }
  ],


  "likes": [{
    "liker": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "created_at": "2013-12-10T09:00:00Z"
    }
  ],
  "views": [{
    "viewer": {
      "id": 10,
      "name": "Prithvi Prasad",
      "img": "remote_folder/images/img1.jpg"
    },
    "created_at": "2013-12-10T09:00:00Z"
    }
  ]
}
O/P:-
{
    "status": "OK",
    "responseCode": 200,
    "responseId": "1"
}
	 *  * @URL : PUT:-http://localhost:9001/adwyse/doctorBlog/updateDoctorBlog
	 * 
	 */

	
	
	
	
	
	
	
	@RequestMapping(value = "/updateDoctorBlog", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response updateDoctorBlog(@RequestBody DoctorBlog blog)
			throws InSufficientInputException, DataNotFoundException {
		DoctorBlogWrapper wrapper = new DoctorBlogWrapper();
		String blogRegidterId = null;
		

		if (blog.getId() != null && blog.getBlog_desc() != null && blog.getOrganization() != null && blog.getDoctor() != null && blog.getAttachment() != null 
				&& blog.getVideo_url() != null && blog.getStatus() != null && blog.getLikes_count() != null
				&& blog.getViews_count() != null && blog.getCreated_at() != null && blog.getUpdated_at() != null && blog.getComments() != null
				&& blog.getLikes() != null && blog.getViews() != null
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
 *  * @URL : http://localhost:9001/adwyse/doctorBlog/getAllDoctorBlogs
 * 
 */
	
	
	@RequestMapping(value = "/getAllDoctorBlogs", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getDoctorBlogDetails() throws DataNotFoundException {
		DoctorBlogWrapper wrapper = new DoctorBlogWrapper();
		List<DoctorBlog> listofData = blogRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		//Blog oBlog = new Blog();
		//BeanUtils.copyProperties(listofData, oBlog);
		wrapper.setBlog(listofData);
		log.info("============ GETALLBLOGS ============"+listofData.toString());
		return wrapper;
	
	}
	
	


}
