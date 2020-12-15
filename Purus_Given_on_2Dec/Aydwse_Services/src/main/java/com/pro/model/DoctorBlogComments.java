package com.pro.model;

import java.util.List;

import lombok.Data;

@Data
public class DoctorBlogComments {

	
	private DoctorBlogCommentsCommenter commenter;
	private DoctorBlogCommentsMessageType message_type;
	private String message;
	private String created_at;
	private int likes_count;
	private List<DoctorBlogCommentLikes> comment_likes;
	
}
