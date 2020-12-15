package com.pro.model;

import lombok.Data;

@Data
public class Consultation_Fees {
	private Video_Call video_Call;
	private Text_Call text_Call;

	private Audio_Video_Call audio_Video_Call;
	private Followup_Call followup_Call;
	private Availability_Schedule availability_Schedule;

}
