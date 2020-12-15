package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.PostFAQ;

public interface PostFAQRepository extends MongoRepository<PostFAQ, String> {

}
