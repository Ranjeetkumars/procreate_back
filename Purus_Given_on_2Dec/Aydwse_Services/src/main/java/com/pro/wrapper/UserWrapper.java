package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.UserRegistartion;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class UserWrapper  extends Response  implements Serializable{ 
	/**
	 * 
	 */
	private static final long serialVersionUID = -8017474886219027550L;
	private Optional<UserRegistartion> response;
	private List<UserRegistartion> response1;
	private String  listOfData;

}
