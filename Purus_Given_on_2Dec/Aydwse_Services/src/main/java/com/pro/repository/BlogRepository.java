package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pro.model.Blog;
@Repository
public interface BlogRepository extends MongoRepository<Blog,String>{

}
