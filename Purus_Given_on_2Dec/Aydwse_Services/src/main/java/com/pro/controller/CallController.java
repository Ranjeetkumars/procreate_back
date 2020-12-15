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
import com.pro.model.Call;
import com.pro.repository.CallRepository;
import com.pro.utils.Response;
import com.pro.wrapper.CallWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/call")
@Slf4j
public class CallController 
{

	@Autowired
	private CallRepository callRepository;
	
	/**
	 * @author : varma gurrala
	 * @throws DataNotFoundException
	 * @Date : 03-12-2020
	 * @Des :addCall Inputs :{

  
  "caller": {
    "ip": "10.256.24.235",
    "id": 1,

    "type": {
      "id": 1,
      "name": "Doctor"
   
           }
  },

 "receiver": {
    "ip": "10.256.21.135",
    "id": 2,
    "type": {
      "id": 2,
      "name": "Patient"
    }
  },
  "organization": {
    "id": 1,
    "type": "Hospital",
    "name": "Yashoda"
  },
  "start_time": "2013-12-10T09:00:00Z",
  "end_time": "2013-12-10T09:00:00Z",
  "appointment_details": {
    "id": 10,
    "booked_at": "2013-12-09T09:00:00Z",
    "reason_for_appointment": "High Fever",
    "slot": {
      "id": 10,
      "start_time": "2013-12-10T09:00:00Z",
      "end_time": "2013-12-10T09:30:00Z"
    }
  }


}
	 * @URL : http://localhost:1006/adwyse/call/addCall
	 * 
	 */
	
	
	
	@RequestMapping(value = "/addCall", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertCall(@RequestBody Call call)
			throws InSufficientInputException, DataNotFoundException {
		CallWrapper wrapper = new CallWrapper();
		String callerId = null;
		log.info("============ INSERTCALL ============" + call.toString());
		if (call.getCaller()  != null && call.getReceiver()  != null &&
				call.getOrganization()  != null && call.getStart_time() != null && call.getEnd_time() 
				 != null && call.getAppointment_details()  != null ) {
			callerId = callRepository.save(call).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(callerId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(call.toString());
		}

		return wrapper;
	}
	
	
	
	

	/**
	 * @author : varma gurrala
	 * @throws DataNotFoundException
	 * @Date : 3-12-2020
	 * @Des :updateCall Inputs :{

  
  "caller": {
    "ip": "10.256.24.235",
    "id": 1,

    "type": {
      "id": 1,
      "name": "Doctor"
   
           }
  },




  "receiver": {
    "ip": "10.256.21.135",
    "id": 2,
    "type": {
      "id": 2,
      "name": "Patient"
    }
  },


  "organization": {
    "id": 1,
    "type": "Hospital",
    "name": "Yashoda"
  },


  "start_time": "2013-12-10T09:00:00Z",

  "end_time": "2013-12-10T09:00:00Z",

  "appointment_details": {
    "id": 10,
    "booked_at": "2013-12-09T09:00:00Z",
    "reason_for_appointment": "High Fever",
    "slot": {
      "id": 10,
      "start_time": "2013-12-10T09:00:00Z",
      "end_time": "2013-12-10T09:30:00Z"
    }
  }


}
	 * @URL :http://localhost:1006/adwyse/call/updateCall
	 * 
	 */
	@RequestMapping(value = "/updateCall", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response updateCall(@RequestBody Call call)
			throws InSufficientInputException, DataNotFoundException {
		CallWrapper wrapper = new CallWrapper();
		String callerId = null;
		log.info("============ UPDATECall ============" + call.toString());
		if (call.getCaller()  != null && call.getReceiver()  != null &&
				call.getOrganization()  != null && call.getStart_time() != null && call.getEnd_time() 
				 != null && call.getAppointment_details()  != null) {
			callerId = callRepository.save(call).getId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(callerId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(call.toString());
		}

		return wrapper;
	}
	
	
	
	/**
	 * @author : varma gurrala
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getCall
	 * @URL : http://localhost:1006/adwyse/call/getCall
	 * 
	 */
	
	@RequestMapping(value = "/getCall", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getCall() throws DataNotFoundException {
		CallWrapper wrapper = new CallWrapper();
		List<Call> listofData = callRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETCALL ============"+listofData.toString());
		return wrapper;
	}
}
