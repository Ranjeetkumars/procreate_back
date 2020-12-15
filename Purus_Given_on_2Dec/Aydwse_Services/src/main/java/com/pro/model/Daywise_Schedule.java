package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class Daywise_Schedule {
	private String name;
	private List<Slots> slots;
}
