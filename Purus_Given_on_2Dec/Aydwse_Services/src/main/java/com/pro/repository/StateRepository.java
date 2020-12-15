package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Registration_State;

public interface StateRepository extends MongoRepository<Registration_State,String>
{

}
