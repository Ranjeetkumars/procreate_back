package com.pro.model;

import lombok.Data;

@Data
public class Reminder_Interaction 
{
private int id;
private Reminder_Type type;
private Doctor doctor;
private Patient patient;

}
