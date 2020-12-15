package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.pro.model.Registration_Bank;

public interface Bank_Repository extends MongoRepository<Registration_Bank,String>
{

}
