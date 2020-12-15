package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class Audio_Video_Call {
	private String duration_in_minutes;
	private List<Fees> fees;
}
