package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Family;

public interface Family_Repository extends MongoRepository<Family,String>
{
	

}
