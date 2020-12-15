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

import com.pro.model.Reminder;
import com.pro.repository.ReminderRepository;
import com.pro.utils.Response;
import com.pro.wrapper.Reminder_Wrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/Reminder")
@Slf4j

public class Reminder_Controller 
{
	
	
	
	
	@Autowired
	private	ReminderRepository reminder_Repository;
	
	/**
	 * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 2-12-2020
	 * @Des :{
  "created_at": "2013-12-10T09:00:00Z",
  "message": "This is a Reminder",
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
    },
    "patient": {
      "id": 1,
      "name": "Ranganath"
    }
  }
}
	 * @URL : http://localhost:9001/adwyse/Reminder/addReminder
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/addReminder", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertNotification(@RequestBody Reminder reminder)
			throws InSufficientInputException, DataNotFoundException {
		Reminder_Wrapper wrapper = new Reminder_Wrapper();
		String notifiRegidterId = null;
			
		//notifications
		
		
		if ( reminder.getCreated_at() != null &&  reminder.getMessage() != null &&  reminder.getPriority() != null &&  reminder.getOrganization() != null && reminder.getInteraction() != null ) 		
		
		{
			notifiRegidterId = reminder_Repository.save(reminder).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(notifiRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(reminder.toString());
		}

		return wrapper;
	}

	
	
	/**
	 * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 2-12-2020
	 * @Des :getAllNotifications
	 * @URL : http://localhost:9001/adwyse/Reminder/getAllReminders
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllReminders", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getNotificationDetails() throws DataNotFoundException {
		Reminder_Wrapper wrapper = new Reminder_Wrapper();
		List<Reminder> listofData = reminder_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLReminders ============"+listofData.toString());
		return wrapper;
	
	}
	
	

}
