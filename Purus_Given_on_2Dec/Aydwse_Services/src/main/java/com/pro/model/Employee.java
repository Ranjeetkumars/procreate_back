package com.pro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "employee_details")
public class Employee {
	@Id
	private String employeeId;
	private String employeeName;
	private String employeeSalary;
	private String employeeAddress;
}
