package com.pro.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Employee;

public interface EmployeeRepository  extends MongoRepository<Employee,String>{
	
	List<Employee> findByEmployeeName(String employeeName);

}
