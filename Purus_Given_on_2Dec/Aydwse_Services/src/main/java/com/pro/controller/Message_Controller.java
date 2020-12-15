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
import com.pro.model.Message_Details;
import com.pro.repository.Message_Repository;
import com.pro.utils.Response;
import com.pro.wrapper.Message_Wrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/Message")
@Slf4j
public class Message_Controller 
{
	
	@Autowired
	private	 Message_Repository message_Repository;
	
	/**
	 * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :{
  "sender": {
    "id": 1,
    "type": {
      "id": 1,
      "name": "Doctor"
    }
  },
  "receiver": {
    "id": 1,
    "type": {
      "id": 1,
      "name": "Patient"
    }
  },
  "organization": {
    "id": 1,
    "type": "Hospital",
    "name": "Yashoda"
  },
  "text": "My first message",
  "created_at": "2013-12-10T09:00:00Z",
  "type": {
    "id": 1,
    "name": "Text"
  },
  "path": null
}	 * @URL : http://localhost:9001/adwyse/Message/addMessages
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/addMessages", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertNotification(@RequestBody Message_Details message)
			throws InSufficientInputException, DataNotFoundException {
		Message_Wrapper wrapper = new Message_Wrapper();
		String notifiRegidterId = null;
			
		//notifications
		
		
		if ( message.getSender() != null &&  message.getReceiver() != null && message.getOrganization() != null && message.getText() != null
				&& message.getCreated_at() != null && message.getType() != null && message.getPath() != null) 		
		
		{
			notifiRegidterId = message_Repository.save(message).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(notifiRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(message.toString());
		}

		return wrapper;
	}

	
	
	/**
	  * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :getAllNotifications
	 * @URL : http://localhost:9001/adwyse/Message/getAllMessages
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllMessages", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getNotificationDetails() throws DataNotFoundException {
		Message_Wrapper wrapper = new Message_Wrapper();
		List<Message_Details> listofData = message_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLNotification ============"+listofData.toString());
		return wrapper;
	
	}
	

}
