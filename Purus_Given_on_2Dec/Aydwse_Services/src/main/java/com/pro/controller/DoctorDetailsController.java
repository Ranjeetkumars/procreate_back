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
import com.pro.model.DoctorDetails;
import com.pro.repository.DoctorDetailsRepository;
import com.pro.utils.Response;
import com.pro.wrapper.DoctorDetailsWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/doctor")
@Slf4j
public class DoctorDetailsController {

	@Autowired
	private DoctorDetailsRepository doctorDetailsRepository;
	
	
	
	/**
	 * @author : Saiteja
	 * @throws DataNotFoundException
	 * @Date : 29-11-2020
	 * @Des : Input
	 * {

  "resourceType": "Practitioner",
  
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 938273695 (OFFICIAL), 129IDH4OP733 (USUAL)</p><p><b>name</b>: Eric van den broek (OFFICIAL)</p><p><b>telecom</b>: ph: 0205568263(WORK), E.M.vandenbroek@bmc.nl(WORK), fax: 0205664440(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 07/12/1975</p></div>"
  },
  "identifier": [
    {
      "use": "official",
      "system": "urn:oid:2.16.528.1.1007.3.1",
      "value": "938273695"
    },
    {
      "use": "usual",
      "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
      "value": "129IDH4OP733"
    }
  ],
  "name": [
    {
      "use": "official",
      "family": "van den broek",
      "given": [
        "Eric"
      ],
      "suffix": [
        "MD"
      ]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "0205568263",
      "use": "work"
    },
    {
      "system": "email",
      "value": "E.M.vandenbroek@bmc.nl",
      "use": "work"
    },
    {
      "system": "fax",
      "value": "0205664440",
      "use": "work"
    }
  ],
  "address": [
    {
      "use": "work",
      "line": [
        "Galapagosweg 91"
      ],
      "city": "Den Burg",
      "postalCode": "9105 PZ",
      "country": "NLD"
    }
  ],
  "gender": "male",
  "birthDate": "1975-12-07"
}

	 *  * @URL : http://localhost:9001/adwyse/doctor/addDoctorDetails 
	 */

	@RequestMapping(value = "/addDoctorDetails", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public Response insertDoctorDetailsBlog(@RequestBody DoctorDetails doctorDetails)
			throws InSufficientInputException, DataNotFoundException {
		DoctorDetailsWrapper wrapper = new DoctorDetailsWrapper();
		String doctorRegidterId = null;
			
		
		
		
		if ( doctorDetails.getResourceType() != null && doctorDetails.getText() != null && doctorDetails.getIdentifier() != null && doctorDetails.getName() != null 
				&& doctorDetails.getTelecom() != null && doctorDetails.getAddress() != null && doctorDetails.getGender() != null
				&& doctorDetails.getBirthDate() != null 
				) 		
		
		{
			doctorRegidterId = doctorDetailsRepository.save(doctorDetails).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(doctorRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(doctorDetails.toString());
		}

		return wrapper;
	}
	
	
	
	

/**
 * @author : Saiteja
 * @throws DataNotFoundException
 * @Date : 28-11-2020
 * @Des :getDoctorBlogDetails
 *  * @URL : http://localhost:9001/adwyse/doctor/getAllDoctorDetails
 * 
 */
	
	@RequestMapping(value = "/getAllDoctorDetails", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getDoctorBlogDetails() throws DataNotFoundException {
		DoctorDetailsWrapper wrapper = new DoctorDetailsWrapper();
		List<DoctorDetails> listofData = doctorDetailsRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setDoctor(listofData);
		log.info("============ GETALLBLOGS ============"+listofData.toString());
		return wrapper;
	
	}
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
