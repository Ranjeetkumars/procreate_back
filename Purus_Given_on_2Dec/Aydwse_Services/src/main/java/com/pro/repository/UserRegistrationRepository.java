package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.UserRegistartion;

public interface UserRegistrationRepository  extends MongoRepository<UserRegistartion, String>{

}
