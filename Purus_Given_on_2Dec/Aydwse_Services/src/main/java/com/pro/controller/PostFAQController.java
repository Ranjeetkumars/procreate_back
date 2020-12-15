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

import com.pro.model.PostFAQ;
import com.pro.repository.PostFAQRepository;
import com.pro.utils.Response;

import com.pro.wrapper.PostFAQWrapper;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/faq")
@Slf4j
public class PostFAQController 
{
	@Autowired
	private PostFAQRepository postFAQRepository;
	

	/**
	 * @author : varma gurrala
	 * @throws DataNotFoundException
	 * @Date : 2-12-2020
	 * @Des :addEmployee Inputs :{
  "id": 1,
 
 "section": {
    "id": 1,
    "type": "Payment" 
  }, 


  "question": "My payment is yet to be refunded",

  "creator": {
    "id": 1,
    "name": "Ranganath",
    "type": {
      "id": 1,
      "name": "Doctor"
    }
  },

  "created_at": "2013-12-10T09:00:00Z",

  "answer": "It will be refunded in the next few days"
}
	 * @URL : http://localhost:1006/adwyse/faq/addFAQ
	 * 
	 */
	
	@RequestMapping(value = "/addFAQ", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertFAQ(@RequestBody PostFAQ postFAQ)
			throws InSufficientInputException, DataNotFoundException {
		PostFAQWrapper wrapper = new PostFAQWrapper();
		String postFAQId = null;
		log.info("============ INSERTFAQ ============" + postFAQ.toString());
		if (postFAQ.getId() != null && postFAQ.getSection()!= null && postFAQ.getQuestion()!= null 
				&& postFAQ.getCreator() != null && postFAQ.getCreated_at() != null && postFAQ.getAnswer() != null ) {
			postFAQId = postFAQRepository.save(postFAQ).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(postFAQId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(postFAQ.toString());
		}

		return wrapper;
	}
	
	
	

	/**
	 * @author : varma gurrala
	 * @throws DataNotFoundException
	 * @Date : 2-12-2020
	 * @Des :getAllFaq
	 * @URL : http://localhost:1006/adwyse/faq/getAllFaq
	 * 
	 */
	
	@RequestMapping(value = "/getAllFaq", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getFAQDetails() throws DataNotFoundException {
		PostFAQWrapper wrapper = new PostFAQWrapper();
		List<PostFAQ> listofData = postFAQRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLFAQ ============"+listofData.toString());
		return wrapper;
	}

}
