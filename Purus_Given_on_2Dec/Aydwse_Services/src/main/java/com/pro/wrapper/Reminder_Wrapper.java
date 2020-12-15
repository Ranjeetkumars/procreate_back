package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Reminder;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Reminder_Wrapper extends Response  implements Serializable
{

	private static final long serialVersionUID = -5199373670056481370L;
	private Optional<Reminder> response;
	private List<Reminder> response1;
	private String  listOfData;
	
}
