package com.javasampleapproach.datamongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.javasampleapproach.datamongodb.model.Company;

public interface CompanyRepository extends MongoRepository<Company, String>{
	List<Company> findByName(String name);
	
	@Query("{'contact.address': ?0}")
	List<Company> findByAddress(String address);
}