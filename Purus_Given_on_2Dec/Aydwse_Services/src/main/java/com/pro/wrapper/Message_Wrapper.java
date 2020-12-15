package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Message_Details;
import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class Message_Wrapper extends Response  implements Serializable
{
		private static final long serialVersionUID = -8017474886219027550L;
		private Optional<Message_Details> response;
		private List<Message_Details> response1;
		private String  listOfData;
	}



