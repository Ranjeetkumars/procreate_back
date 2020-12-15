package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.DoctorDetails;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DoctorDetailsWrapper  extends Response  implements Serializable{
	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<DoctorDetails> response;
	private List<DoctorDetails> doctor;
	private String  listOfData;
}
