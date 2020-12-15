package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class Availability_Schedule {
	private String include_holidays;
	private List<Daywise_Schedule> daywise_Schedule;
}
