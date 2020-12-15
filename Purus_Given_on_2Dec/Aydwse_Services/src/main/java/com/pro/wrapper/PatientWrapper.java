package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import com.pro.model.Patient;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter

public class PatientWrapper  extends Response  implements Serializable {
	
	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<Patient> response;
	private List<Patient> patient;
	private String  listOfData;
	

}
