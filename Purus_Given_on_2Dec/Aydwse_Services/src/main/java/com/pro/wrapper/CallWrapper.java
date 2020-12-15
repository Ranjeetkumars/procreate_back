package com.pro.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.pro.model.Call;

import com.pro.utils.Response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CallWrapper extends Response implements Serializable
{
	private static final long serialVersionUID = -8017474886219027550L;
	private Optional<Call> response;
	private List<Call> response1;
	private String  listOfData;
}
