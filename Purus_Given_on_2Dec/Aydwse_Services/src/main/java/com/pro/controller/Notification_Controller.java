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
import com.pro.model.Notifications;
import com.pro.repository.Notification_Repository;
import com.pro.utils.Response;
import com.pro.wrapper.Notification_Wrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/notifi")
@Slf4j

public class Notification_Controller
{

	@Autowired
	private	Notification_Repository notification_Repository;
	
	/**
	 * @author :Varma
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :{
	"notifications": [{
		"created_at": "12/22/2020 10:56:02",
		"type": {
			"id": 1,
			"name": "Reminders"
		},
		"message": "This is a notification",
		"priority": {
			"id": 1,
			"value": "Medium"
		},
		"organization": {
			"id": 1,
			"type": "company",
			"name": "Procreate"
		},
		"interaction": {
			"id": 100,
			"type": {
				"id": 1,
				"value": "Clincal Appointment"
			},
			"doctor": {
				"id": 1,
				"name": "Dr Khalil"
			}
		},
		"seen": true,
		"seen_at": "12/24/2020 10:56:02"
	}]}
	 * @URL : http://localhost:9001/adwyse/notifi/addNotifications
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/addNotifications", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertNotification(@RequestBody Notifications notifications)
			throws InSufficientInputException, DataNotFoundException {
		Notification_Wrapper wrapper = new Notification_Wrapper();
		String notifiRegidterId = null;
			
		//notifications
		
		
		if ( notifications.getNotifications() != null ) 		
		
		{
			notifiRegidterId = notification_Repository.save(notifications).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(notifiRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(notifications.toString());
		}

		return wrapper;
	}

	
	
	/**
	 * @author :Varma
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getAllNotifications
	 * @URL : http://localhost:9001/adwyse/notifi/getAllNotifications
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllNotifications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getNotificationDetails() throws DataNotFoundException {
		Notification_Wrapper wrapper = new Notification_Wrapper();
		List<Notifications> listofData = notification_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLNotification ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	
	
	
	
	
}
