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
import com.pro.model.Registration_Bank;
import com.pro.model.Registration_Qualification;
import com.pro.model.Registration_Specialization;
import com.pro.model.Registration_State;
import com.pro.repository.Bank_Repository;
import com.pro.repository.Qualification_Repository;
import com.pro.repository.SpecializationRepository;
import com.pro.repository.StateRepository;
import com.pro.utils.Response;
import com.pro.wrapper.Bank_Wrapper;
import com.pro.wrapper.Qualification_Wrapper;
import com.pro.wrapper.SpecializationWrapper;
import com.pro.wrapper.StateWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/registration")
@Slf4j

public class Registration_Controller {

	
	@Autowired
	private Bank_Repository bank_Repository;
	@Autowired
	private Qualification_Repository qualification_Repository;
@Autowired 
private StateRepository stateRepository;
	
@Autowired
private SpecializationRepository specializationRepository ;

	
/**
 * @author : Jaipal
 * @throws DataNotFoundException
 * @Date : 28-11-2020
 * @Des :inputs:{
  "id": "1",
  "name": "State bank Of India"
}
 * @URL : http://localhost:9001/adwyse/registration/addBank
 * 
 */
	@RequestMapping(value = "/addBank", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertBank(@RequestBody Registration_Bank registration_Bank)
			throws InSufficientInputException, DataNotFoundException {
		Bank_Wrapper wrapper = new Bank_Wrapper();
		String bankRegidterId = null;
			log.info("============ UPDATEALLBANKS ============" + registration_Bank.toString());
					
		
		
		if ( registration_Bank.getName() != null ) 		
		
		{
			bankRegidterId = bank_Repository.save(registration_Bank).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(bankRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(registration_Bank.toString());
		}

		return wrapper;
	}


	
	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getBannk
	 * @URL : http://localhost:9001/adwyse/registration/getAllBanks
	 * 
	 */
	
	@RequestMapping(value = "/getAllBanks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getBankDetails() throws DataNotFoundException {
		Bank_Wrapper wrapper = new Bank_Wrapper();
		List<Registration_Bank> listofData = bank_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLBANKS ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	

	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :{
  "id": "1",
  "name": "MCA"
}
	 * @URL : http://localhost:9001/adwyse/registration/addQualification
	 * 
	 */
	
	@RequestMapping(value = "/addQualification", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertQualification(@RequestBody Registration_Qualification registration_Qualification)
			throws InSufficientInputException, DataNotFoundException {
		Qualification_Wrapper wrapper = new Qualification_Wrapper();
		String qualificationRegidterId = null;
			log.info("============ UPDATEALLBANKS ============" + registration_Qualification.toString());
					
		
		
		if ( registration_Qualification.getName() != null ) 		
		
		{
			qualificationRegidterId = qualification_Repository.save(registration_Qualification).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(qualificationRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(registration_Qualification.toString());
		}

		return wrapper;
	}
	
	
	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getQualification
	 * @URL : http://localhost:9001/adwyse/registration/getAllQualifications
	 * 
	 */
	
	

	
	
	@RequestMapping(value = "/getAllQualifications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getQualificationDetails() throws DataNotFoundException {
		Qualification_Wrapper wrapper = new Qualification_Wrapper();
		List<Registration_Qualification> listofData = qualification_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLBANKS ============"+listofData.toString());
		return wrapper;
	
	}
	
	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :{
  "id": "1",
  "name": "Andhra Pradesh"
}
	 * @URL : http://localhost:9001/adwyse/registration/addStates
	 * 
	 */
	

	
	
	
	
	@RequestMapping(value = "/addStates", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertEmployee(@RequestBody Registration_State state)
			throws InSufficientInputException, DataNotFoundException {
		StateWrapper wrapper = new StateWrapper();
		String stestsRegidterId = null;
		log.info("============ INSERTStates ============" + state.toString());
		if (state.getName() != null) {
			stestsRegidterId =stateRepository.save(state).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(stestsRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(state.toString());
		}

		return wrapper;
	}
	
	
	
	
	

	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getState
	 * @URL : http://localhost:9001/adwyse/registration/getAllState
	 * 
	 */
	

	@RequestMapping(value = "/getAllState", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getStateDetails() throws DataNotFoundException {
		StateWrapper wrapper = new StateWrapper();
		List<Registration_State> listofData = stateRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLBANKS ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :{
  "id": "1",
  "name": "doctor"
}
	 * @URL : http://localhost:9001/adwyse/registration/addspecialization
	 * 
	 */

	
	@RequestMapping(value = "/addspecialization", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertSpecialization(@RequestBody Registration_Specialization specialization)
			throws InSufficientInputException, DataNotFoundException {
		SpecializationWrapper wrapper = new SpecializationWrapper();
		String specilzionRegidterId = null;
		log.info("============ INSERTSpecialization ============" + specialization.toString());
		if (specialization.getName() != null) {
			specilzionRegidterId =specializationRepository.save(specialization).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(specilzionRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(specialization.toString());
		}

		return wrapper;
	}

	
	
	
	
	

	/**
	 * @author : Jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getAllSpecialization
	 * @URL : http://localhost:9001/adwyse/registration/getAllSpecialization
	 * 
	 */
	
	@RequestMapping(value = "/getAllSpecialization", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getSpecializationDetails() throws DataNotFoundException {
		SpecializationWrapper wrapper = new SpecializationWrapper();
		List<Registration_Specialization> listofData = specializationRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLSpecilization ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
