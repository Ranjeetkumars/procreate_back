package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.DoctorDetails;

public interface DoctorDetailsRepository extends MongoRepository<DoctorDetails,String>{

}
