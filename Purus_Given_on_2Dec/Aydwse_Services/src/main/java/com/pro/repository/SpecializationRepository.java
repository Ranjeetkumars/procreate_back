package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Registration_Specialization;

public interface SpecializationRepository extends MongoRepository<Registration_Specialization,String>{

}
