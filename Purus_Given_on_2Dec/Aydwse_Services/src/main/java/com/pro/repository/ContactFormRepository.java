package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.ContactForm;

public interface ContactFormRepository extends MongoRepository<ContactForm, String> {

}
