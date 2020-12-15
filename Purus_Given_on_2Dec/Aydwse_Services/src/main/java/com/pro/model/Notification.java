package com.pro.model;

import lombok.Data;

@Data

public class Notification 
{
private String created_at;
private Notification_Type type;
private String message;
private Notifi_Priority priority;
private Notifi_Org organization;
private Notifi_Inter interaction;
private boolean seen;
private String seen_at;
	
}
