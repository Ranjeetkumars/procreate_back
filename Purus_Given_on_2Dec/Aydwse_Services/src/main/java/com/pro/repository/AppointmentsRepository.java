package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Appointments;

public interface AppointmentsRepository extends MongoRepository<Appointments,String>{

}
