package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class DoctorDetailsName {
private String use;
private String family;
private List<String> given;
private List<String> suffix;

}
