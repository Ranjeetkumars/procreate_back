package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Registration_Qualification;

public interface Qualification_Repository extends MongoRepository<Registration_Qualification,String> {

}
