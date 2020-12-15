package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Doctor_Verification;


public interface Verification_Repository extends MongoRepository<Doctor_Verification, String>
{

}
