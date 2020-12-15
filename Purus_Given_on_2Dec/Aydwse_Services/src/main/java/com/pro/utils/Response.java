package com.pro.utils;





import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;


import lombok.Data;

@Data
@JsonInclude(Include.NON_NULL)
public class Response {
	String status;
	Integer responseCode;
	String  responseId;
	String responseMessage;
	//List<Patient> patientResponse;
//	Optional<Patient> patientResponse;
//	ResponseEntity<JwtResponse> jwtResponse;

}
