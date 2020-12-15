package com.pro.wrapper;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Appointments;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter



public class AppointmentsWrapper extends Response  implements Serializable {

	private static final long serialVersionUID = -8017474886219027550L;
	private Optional<Appointments> response;
	private List<Appointments> response1;
	private String  listOfData;

	
	
}
