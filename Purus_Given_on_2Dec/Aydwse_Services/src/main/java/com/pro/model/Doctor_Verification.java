package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Verification_info")
public class Doctor_Verification 
{
	@Id 
	private String id;
	
	private Verifier verifier;

	private List<Kyc> kyc;
	private Entity entity;
	private String remarks;
	private Organizations organization;
	private List<Verification_Document> verification_document; 
	
	private List<Identity_Document> identity_document;
	
	private String created_at;
	private List<Status> status;
} 
