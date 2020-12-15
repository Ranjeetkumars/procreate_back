package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.Notifications;

public interface Notification_Repository extends MongoRepository<Notifications,String>
{

}
