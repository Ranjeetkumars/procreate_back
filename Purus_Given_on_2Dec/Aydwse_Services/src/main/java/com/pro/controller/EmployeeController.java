package com.pro.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pro.exceptions.DataNotFoundException;
import com.pro.exceptions.InSufficientInputException;
import com.pro.model.Employee;
import com.pro.repository.EmployeeRepository;
import com.pro.utils.Response;
import com.pro.wrapper.EmployeeWrapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/employee")
@Slf4j
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :addEmployee Inputs :{ "employeeName":"Purushotham",
	 *      "employeeSalary":"13000", "employeeAddress":"Ameerpet Hyderabd" }
	 * @URL : http://localhost:1006/adwyse/employee/addEmployee
	 * 
	 */
	@RequestMapping(value = "/addEmployee", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response insertEmployee(@RequestBody Employee employee)
			throws InSufficientInputException, DataNotFoundException {
		EmployeeWrapper wrapper = new EmployeeWrapper();
		String emploRegidterId = null;
		log.info("============ INSERTEMPLOYEE ============" + employee.toString());
		if (employee.getEmployeeName() != null && employee.getEmployeeAddress() != null
				&& employee.getEmployeeSalary() != null) {
			emploRegidterId = employeeRepository.save(employee).getEmployeeId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(emploRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(employee.toString());
		}

		return wrapper;
	}

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :updateEmployee Inputs :{ "employeeId":"5fc1e7f67e7d5d24f8b21453",
	 *      "employeeName":"Purushotham", "employeeSalary":"13000",
	 *      "employeeAddress":"Ameerpet Hyderabd" }
	 * @URL : http://localhost:1006/adwyse/employee/updateEmployee
	 * 
	 */

	@RequestMapping(value = "/updateEmployee", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response updatetEmployee(@RequestBody Employee employee)
			throws InSufficientInputException, DataNotFoundException {
		EmployeeWrapper wrapper = new EmployeeWrapper();
		String emploRegidterId = null;
		log.info("============ UPDATETEMPLOYEE ============" + employee.toString());
		if (employee.getEmployeeName() != null && employee.getEmployeeAddress() != null
				&& employee.getEmployeeSalary() != null) {
			emploRegidterId = employeeRepository.save(employee).getEmployeeId();
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setResponseId(emploRegidterId);
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(employee.toString());
		}

		return wrapper;
	}

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020
	 * @Des :getAllEmployees
	 * @URL : http://localhost:1006/adwyse/employee/getAllEmployees
	 * 
	 */
	@RequestMapping(value = "/getAllEmployees", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getEmployeeDetails() throws DataNotFoundException {
		EmployeeWrapper wrapper = new EmployeeWrapper();
		List<Employee> listofData = employeeRepository.findAll();
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		wrapper.setListOfData(listofData.toString());
		log.info("============ GETALLEMPLOYEES ============"+listofData.toString());
		return wrapper;
	}

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020 * @Des :getEmpById Inputs :{
	 *       "employeeId":"5fc1e7f67e7d5d24f8b21453" }
	 * @URL : http://localhost:1006/adwyse/employee/getEmpById
	 * 
	 */

	@RequestMapping(value = "/getEmpById", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response getEmpById(@RequestBody Employee employee)
			throws InSufficientInputException, DataNotFoundException {
		EmployeeWrapper wrapper = new EmployeeWrapper();
		Optional<Employee> listOfdata = null;
		log.info("============ get emp details by their id ============" + employee.getEmployeeId());
		if (employee.getEmployeeId() != null) {
			listOfdata = employeeRepository.findById(employee.getEmployeeId());
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setListOfData(listOfdata.toString());
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(employee.toString());
		}

		return wrapper;
	}

	/**
	 * @author : Purushotham Akula
	 * @throws DataNotFoundException
	 * @Date : 28-11-2020 * @Des :getEmpByName Inputs :{
	 *       "employeeName":""Bhuvansewar" }
	 * @URL : http://localhost:1006/adwyse/employee/getEmpByName
	 * 
	 */

	@RequestMapping(value = "/getEmpByName", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Response getEmployeeDetailsByName(@RequestBody Employee employee)
			throws InSufficientInputException, DataNotFoundException {
		EmployeeWrapper wrapper = new EmployeeWrapper();
		List<Employee> listOfdata = null;
		log.info("============ GETEMPBYNAME============" + employee.getEmployeeName());
		if (employee.getEmployeeName() != null) {
			listOfdata = employeeRepository.findByEmployeeName(employee.getEmployeeName());
			wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
			wrapper.setListOfData(listOfdata.toString());
		} else {
			wrapper.setResponseCode(org.springframework.http.HttpStatus.BAD_REQUEST.value());
			wrapper.setStatus(org.springframework.http.HttpStatus.BAD_REQUEST.getReasonPhrase());
			throw new InSufficientInputException(employee.toString());
		}

		return wrapper;
	}
}
