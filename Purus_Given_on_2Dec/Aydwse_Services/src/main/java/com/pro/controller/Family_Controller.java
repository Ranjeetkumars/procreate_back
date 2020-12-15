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
import com.pro.model.Family;
import com.pro.repository.Family_Repository;
import com.pro.utils.Response;
import com.pro.wrapper.Family_Wrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/Family")
@Slf4j
public class Family_Controller 
{

	@Autowired
	private	 Family_Repository family_Repository;
	
	/**
	 * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :{
  "resourceType": "RelatedPerson",
  "id": "benedicte",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Bénédicte du Marché</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>43, Place du Marché Sainte Catherine, 75004 Paris, France</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Phone: +33 (237) 998327</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
  },
  "identifier": [
    {
      "use": "usual",
      "type": {
        "text": "INSEE"
      },
      "system": "urn:oid:1.2.250.1.61",
      "value": "272117510400399"
    }
  ],
  "active": true,
  "patient": {
    "reference": "Patient/example"
  },
  "relationship": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
          "code": "N"
        },
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "WIFE"
        }
      ]
    }
  ],
  "name": [
    {
      "family": "du Marché",
      "_family": {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
            "valueString": "VV"
          }
        ]
      },
      "given": [
        "Bénédicte"
      ]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+33 (237) 998327"
    }
  ],
  "gender": "female",
  "address": [
    {
      "line": [
        "43, Place du Marché Sainte Catherine"
      ],
      "city": "Paris",
      "postalCode": "75004",
      "country": "FRA"
    }
  ],
  "photo": [
    {
      "contentType": "image/jpeg",
      "url": "Binary/f016"
    }
  ]
} * @URL : http://localhost:9001/adwyse/Family/addFamilies
	 * 
	 */
	
	
	
	
	@RequestMapping(value = "/addFamilies", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertNotification(@RequestBody Family family)
			throws InSufficientInputException, DataNotFoundException {
		Family_Wrapper wrapper = new Family_Wrapper();
		String notifiRegidterId = null;
			
		//notifications
		
		
		if ( family.getResourceType() != null &&  family.getText() != null && family.getIdentifier() != null && family.getActive() != null
				&& family.getPatient() != null && family.getRelationship() != null && family.getName() != null && family.getTelecom() != null  && family.getGender() != null 
				&& family.getAddress() != null && family.getPhoto() != null   ) 		
		
		{
			notifiRegidterId = family_Repository.save(family).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(notifiRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(family.toString());
		}

		return wrapper;
	}
	
	
	/**
	  * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :	UpdateFamily
	 * @URL : http://localhost:9001/adwyse/Family/UpdateFamily
	 * 
	 */
	
	@RequestMapping(value = "/UpdateFamily", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response updateBlog(@RequestBody Family family)
			throws InSufficientInputException, DataNotFoundException {
		Family_Wrapper wrapper = new Family_Wrapper();
		String blogRegidterId = null;
		

		if ( family.getResourceType() != null &&  family.getText() != null && family.getIdentifier() != null && family.getActive() != null
				&& family.getPatient() != null && family.getRelationship() != null && family.getName() != null && family.getTelecom() != null  && family.getGender() != null 
				&& family.getAddress() != null && family.getPhoto() != null   ) 		
		
		
		{
			blogRegidterId = family_Repository.save(family).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(blogRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(family.toString());
		}

		return wrapper;
	}
	
	

	
	
	/**
	  * @author :M.jaipal reddy
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :getAllNotifications
	 * @URL : http://localhost:9001/adwyse/Family/getAllFamilies
	 * 
	 */
	
	
	@RequestMapping(value = "/getAllFamilies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getNotificationDetails() throws DataNotFoundException {
		Family_Wrapper wrapper = new Family_Wrapper();
		List<Family> listofData = family_Repository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setFamily(listofData);
		log.info("============ GETALLNotification ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	


}
