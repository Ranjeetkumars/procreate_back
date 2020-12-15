package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Patient;

public interface  PatientRepository extends MongoRepository<Patient,String>
{

}
