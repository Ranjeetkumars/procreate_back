package com.pro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pro.exceptions.DataNotFoundException;
import com.pro.exceptions.InSufficientInputException;
import com.pro.model.ContactForm;
import com.pro.repository.ContactFormRepository;
import com.pro.utils.Response;
import com.pro.wrapper.ContactFormWrapper;


import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/contact")
@Slf4j
public class ContactFormController 
{
@Autowired
private ContactFormRepository contactFormRepository;




/**
 * @author : varma gurrala
 * @throws DataNotFoundException
 * @Date : 03-12-2020
 * @Des :addContacts Inputs :{
  "id": 1, 
  "message": "How can I join the app", 
  "created_at": "2013-12-10T09:00:00Z",
  "name": "Ranganath",
  "email": "ranganath@gmail.com",
  "phone_number": "9494786948",
  "remarks": "Hey this is important"
}
{
    "status": "OK",
    "responseCode": 200,
    "responseId": "1"
}
 * @URL :http://localhost:1006/adwyse/contactForm/addContacts
 * 
 */



@RequestMapping(value = "/addContacts", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public Response insertContact(@RequestBody ContactForm contactForm)
		throws InSufficientInputException, DataNotFoundException {
	ContactFormWrapper wrapper = new ContactFormWrapper();
	String contactId = null;
	log.info("============ INSERTCONTACT ============" + contactForm.toString());
	if (contactForm.getId() != null && contactForm.getMessage() != null && contactForm.getCreated_at()!= null
			&& contactForm.getName()!= null && contactForm.getEmail() != null && contactForm.getPhone_number() != null &&
			contactForm.getRemarks()!= null )
	{
		contactId = contactFormRepository.save(contactForm).getId();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setResponseId(contactId);
	} else {
		wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
		throw new InSufficientInputException(contactForm.toString());
	}

	return wrapper;
}

}
