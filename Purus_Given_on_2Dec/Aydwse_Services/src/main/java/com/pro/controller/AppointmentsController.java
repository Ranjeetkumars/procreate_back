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
import com.pro.model.Appointments;
import com.pro.repository.AppointmentsRepository;
import com.pro.utils.Response;
import com.pro.wrapper.AppointmentsWrapper;

import lombok.extern.slf4j.Slf4j;
@RestController
@RequestMapping("/appointments")
@Slf4j


public class AppointmentsController
{

	
	
	@Autowired
	private AppointmentsRepository appointmentsRepository;
	
	

	
	/**
	 * @author : Swapna
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :	{
		"id": 1,
		"patient": {
			"id": 1,
			"name": "Ranagnth"
		},
		"doctor": {
			"id": 1,
			"name": "Ranagnth"
		},
		"organization": {
			"id": 1,
			"type": "company",
			"name": "Procreate"
		},
		"created_time": "10:56:02",
		"duration": "10:56:02",
		"appointment_type": {
			"id": 1,
			"type": "Ranagnth"
		}

	}
	 * @URL : http://localhost:9001/adwyse/appointments/addAppointments
	 * 
	 */
	
	
	@RequestMapping(value = "/addAppointments", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertAppointments(@RequestBody Appointments appointments)
			throws InSufficientInputException, DataNotFoundException {
		AppointmentsWrapper wrapper = new AppointmentsWrapper();
		String appointmentsId = null;
		log.info("============ INSERTAPPOINTMENTS ============" + appointments.toString());
		if (appointments.getPatient() != null && appointments.getDoctor() != null
				&& appointments.getOrganization() != null&& appointments.getCreated_time() != null && appointments.getDuration() != null && appointments.getAppointment_type() != null) {
			appointmentsId = appointmentsRepository.save(appointments).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(appointmentsId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(appointments.toString());
		}

		return wrapper;
	}
	
	
	/**
	 * @author : swpana
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :update"[Appointments(id=1, patient=Patient_Appointment(id=1, name=Ranagnth), doctor=Doctor_Appointment(id=1, name=Ranagnth), organization=Organization_Appointment(id=1, type=company, name=Procreate), created_time=10:56:02, duration=10:56:02, appointment_type=Appointment_Type_Appointment(id=1, type=Ranagnth))]"
	 * @URL : http://localhost:9001/adwyse/appointments/updateAppointments
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/updateAppointments", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response updateAppointments(@RequestBody Appointments appointments)
			throws InSufficientInputException, DataNotFoundException {
		AppointmentsWrapper wrapper = new AppointmentsWrapper();
		String appointmentsId = null;
		log.info("============ UPDATAPPOINTMENTS ============" + appointments.toString());
		if ( appointments.getPatient() != null && appointments.getDoctor() != null
				&& appointments.getOrganization() != null&& appointments.getCreated_time() != null 
				&& appointments.getDuration() != null && appointments.getAppointment_type() != null ) 
		{
			appointmentsId = appointmentsRepository.save(appointments).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(appointmentsId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(appointments.toString());
		}

		return wrapper;
	}
	/**
	 * @author :Swapna
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getAllAppointments
	 * @URL : http://localhost:9001/adwyse/appointments/getAllAppointments
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllAppointments", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getAppointmentsDetails() throws DataNotFoundException {
		AppointmentsWrapper wrapper = new AppointmentsWrapper();
		List<Appointments> listofData = appointmentsRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLAPPOINTMENTS ============"+listofData.toString());
		return wrapper;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
