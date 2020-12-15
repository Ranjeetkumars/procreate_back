package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Registration_Specialization;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class Qualification_Wrapper extends Response  implements Serializable
{

	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<Registration_Specialization> response;
	private List<Registration_Specialization> response1;
	private String  listOfData;
}
