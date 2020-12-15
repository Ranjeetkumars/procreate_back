package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.CreateComments;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateCommentsWrapper  extends Response  implements Serializable {

	
	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<CreateComments> response;
	private List<CreateComments> createComments;
	private String  listOfData;
	
	
	
}
