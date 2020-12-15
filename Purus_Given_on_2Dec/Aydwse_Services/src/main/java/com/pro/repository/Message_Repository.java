package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Message_Details;



public interface Message_Repository extends MongoRepository<Message_Details,String>
{
	
}
