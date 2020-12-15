package com.pro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pro.exceptions.DataNotFoundException;
import com.pro.exceptions.InSufficientInputException;
import com.pro.model.UserRegistartion;
import com.pro.repository.UserRegistrationRepository;
import com.pro.utils.Response;
import com.pro.wrapper.UserWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/userReg")
@Slf4j
public class UserRegController {

	@Autowired
	UserRegistrationRepository userRegRepository;

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :addEmployee Inputs :{ "id": 2, "first_name": "Akula", "last_name":
	 *      "Neeharika", "email": "ranganathkomandur@gmail.com", "password":
	 *      "kvnsvnisvsvsmvi", "phone_number": "9494786948", "clinic_number":
	 *      "040-27564912", "gender": "Male", "dob": "12 Dec 1988",
	 *      "term_Conditions": true, "organization": { "id": 1, "type": "company",
	 *      "name": "Procreate" }, "roles": [ { "id": 1, "name": "Admin" }, { "id":
	 *      2, "name": "Doctor" } ], "address": { "line1": "3-4-526/40", "line2":
	 *      "Narayanaguda", "city": "Hyderabad", "state": { "id": 10, "name":
	 *      "Telangana" } }, "profile": { "professional_details": { "profile_img":
	 *      "home/images/img1.jpg", "medical_registration_number": "B7Y8279EC2",
	 *      "qualifications": [ { "id": 10, "name" : "M Tech" } ], "specialization":
	 *      [ {"id": 10, "name": "Urologist"}, {"id": 12, "name": "Dentist"} ],
	 *      "experince_in_years": 5 , "awards_Recognitions" : { "awards": [ {
	 *      "name": "Gold Medalist", "attachment": "home/images/img2.jpg" } ],
	 *      "recognitions": [ { "name": "Best Performer in 2012", "attachment":
	 *      "home/images/img3.jpg" } ] }, "account_Information": {
	 *      "account_holder_name": "K Ranganath", "account_number": "1932990213029",
	 *      "bank" : { "id": 23, "name": "State Bank of India" }},
	 *      "consultation_Fees": { "video_Call": { "duration_in_minutes": "10",
	 *      "fees": [ { "amount": 500, "unit": { "id": 1, "symbol": "INR",
	 *      "symbol_img": "inr_symbol_image_path.jpg" } }, { "amount": 10, "unit": {
	 *      "id": 2, "symbol": "USD", "symbol_img": "usd_symbol_image_path.jpg" } }
	 *      ] }, "text_Call": { "duration_in_minutes": "10", "fees": [ { "amount":
	 *      500, "unit": { "id": 1, "symbol": "INR", "symbol_img":
	 *      "inr_symbol_image_path.jpg" } }, { "amount": 10, "unit": { "id": 2,
	 *      "symbol": "USD", "symbol_img": "usd_symbol_image_path.jpg" } } ] },
	 *      "audio_Video_Call": { "duration_in_minutes": "10", "fees": [ { "amount":
	 *      500, "unit": { "id": 1, "symbol": "INR", "symbol_img":
	 *      "inr_symbol_image_path.jpg" } }, { "amount": 10, "unit": { "id": 2,
	 *      "symbol": "USD", "symbol_img": "usd_symbol_image_path.jpg" } } ] },
	 *      "followup_Call": { "duration_in_minutes": "10", "fees": [ { "amount":
	 *      500, "unit": { "id": 1, "symbol": "INR", "symbol_img":
	 *      "inr_symbol_image_path.jpg" } }, { "amount": 10, "unit": { "id": 2,
	 *      "symbol": "USD", "symbol_img": "usd_symbol_image_path.jpg" } } ] },
	 *      "availability_Schedule": { "include_holidays": false,
	 *      "daywise_Schedule": [ { "name": "Monday", "slots": [ { "start_time":
	 *      "0900", "end_time": "1200" }, { "start_time": "1400", "end_time": "1800"
	 *      } ] }, { "name": "Tuesday", "slots": [ { "start_time": "0900",
	 *      "end_time": "1200" }, { "start_time": "1400", "end_time": "1800" } ] },
	 *      { "name": "Wednesday", "slots": [ { "start_time": "0900", "end_time":
	 *      "1200" } ] }
	 * 
	 *      ] } }
	 * 
	 *      }}}
	 * @URL : http://localhost:1006/adwyse/userReg/user_Registration
	 * 
	 */
	@RequestMapping(value = "/user_Registration", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertUserRegistration(@RequestBody UserRegistartion user)
			throws InSufficientInputException, DataNotFoundException {
		UserWrapper wrapper = new UserWrapper();
		String emploRegidterId = null;
		log.info("============ INSERTUSERREGISTRATION ============" + user.toString());
		if (user.getFirst_name() != null && user.getLast_name() != null
				&& user.getEmail() != null && user.getPassword() != null && user.getPhone_number() != null
				&& user.getClinic_number() != null && user.getGender() != null && user.getDob() != null
				&& user.getTerm_Conditions() != null && user.getOrganization() != null && user.getRoles() != null
				&& user.getAddress() != null && user.getProfile() != null) {
			emploRegidterId = userRegRepository.save(user).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(emploRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(user.toString());
		}

		return wrapper;
	}

}
