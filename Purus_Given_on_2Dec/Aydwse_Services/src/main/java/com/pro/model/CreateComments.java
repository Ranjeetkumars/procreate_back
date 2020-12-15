package com.pro.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("create_Comments")
public class CreateComments {
	@Id
	private String id;
	private DoctorBlogCommentsCommenter commenter;
	private DoctorBlogCommentsMessageType message_type;
	private String message;
	private String created_at;
	private int likes_count;
	private List<DoctorBlogCommentLikes> comment_likes;

}
