package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Call;

public interface CallRepository extends MongoRepository<Call, String> {

}
