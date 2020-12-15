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
import com.pro.model.Doctor_Verification;
import com.pro.repository.Verification_Repository;
import com.pro.utils.Response;
import com.pro.wrapper.Verification_Wrapper;

import lombok.extern.slf4j.Slf4j;
@RestController
@RequestMapping("/verification")
@Slf4j


public class Doctor_Verification_Controller
{
	@Autowired
	private	Verification_Repository verification_Repository;
	
	/**
	 * @author :M.jaipal Reddy
	 * @throws DataNotFoundException
	 * @Date : 2-12-2020
	 * @Des :
{
  "id": 1,
  "verifier": {
    "id": 2,
    "name": "Ranganath",
    "verified_at": "12/24/2020 12:56:02" 
  },
  "kyc": [{
    "type": {
      "id": 1,
      "name": "PANCARD"
    },
    "document_img": "home/images/pan.jpg"
  }],
  "entity": {
    "type": "Doctor",
    "id": 2,
    "name": "Ranganath"
  },
  "remarks": "Random Remark",
  "organization": {
    "id": 1,
    "name": "Yashoda Hospital"
  },
  "verification_document": [{
    "type": {
      "id": 2,
      "name": "AADHAR"
    },
    "document_img": "home/images/aadhar.jpg"
  }],
  "identity_document": [{
    "type": {
      "id": 3,
      "name": "DRIVING LICENCE"
    },
    "document_img": "home/images/licence.jpg"
  }],
  "created_at": "12/22/2020 10:56:02",
  "status": [
    {
      "value": {
        "id": 10,
        "name": "APPROVED"
      },
      "updated_at": "12/24/2020 12:56:02"
    },
    {
      "value": {
        "id": 2,
        "name": "PENDING"
      },
      "updated_at": "12/22/2020 10:56:02"
    }
  ]
}	 * @URL : http://localhost:9001/adwyse/verification/addVerification
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/addVerification", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertNotification(@RequestBody Doctor_Verification verification)
			throws InSufficientInputException, DataNotFoundException {
		Verification_Wrapper wrapper = new Verification_Wrapper();
		String notifiRegidterId = null;
			
		//notifications
		
		
		if ( verification.getVerifier() != null && verification.getKyc() != null && verification.getEntity() != null &&  verification.getRemarks() != null && verification.getOrganization() != null  && verification.getVerification_document() != null  && verification.getIdentity_document() != null
				&& verification.getCreated_at() != null && verification.getStatus() != null) 		
		
		{
			notifiRegidterId = verification_Repository.save(verification).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(notifiRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(verification.toString());
		}

		return wrapper;
	}
	/**
	 * @author :jaipal
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getAllVerifications
	 * @URL : http://localhost:9001/adwyse/verification/getAllVerifications
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllVerifications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getNotificationDetails() throws DataNotFoundException {
		Verification_Wrapper wrapper = new Verification_Wrapper();
		List<Doctor_Verification> listofData = verification_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLVerifications ============"+listofData.toString());
		return wrapper;
	
	}
	
	
}
	