package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Reminder;

public interface ReminderRepository extends MongoRepository<Reminder,String>
{

}
