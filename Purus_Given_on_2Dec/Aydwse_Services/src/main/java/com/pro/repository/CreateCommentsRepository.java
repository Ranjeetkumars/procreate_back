package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pro.model.CreateComments;

@Repository
public interface CreateCommentsRepository  extends MongoRepository<CreateComments,String> {


}
