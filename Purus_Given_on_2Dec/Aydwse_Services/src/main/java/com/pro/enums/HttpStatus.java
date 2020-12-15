package com.pro.enums;

import java.util.ArrayList;
import java.util.List;

/**
 * Enumeration of HTTP status codes.
 *
 * <p>
 * The HTTP status code series can be retrieved via {@link #series()}.
 * 
 * @author VENKAT
 * @since 2019-03-30
 * @Time 3:58PM
 *
 */

public enum HttpStatus {

	/*
	 * Controll Layer SpecificError
	 */
	INSUFFICIEN_INPUT() {
		/**
		 * Return the integer value of this status code.
		 */
		public int value() {
			return 500;
		}

		/**
		 * Return the reason phrase of this status code.
		 */
		public String getReasonPhrase() {
			return "INSUFFICIENT INPUTS";
		}

		/**
		 * Return the getErrorMessages of this status code.
		 */
		public List<String> getErrorMessages() {
			List<String> list = new ArrayList<String>();
			list.add("INSUFFICIENT INPUTS");
			return list;
		}
	},

	/*
	 * Service Layer Specific Error Codes
	 */
	NO_DATA_FOUND() {
		/**
		 * Return the integer value of this status code.
		 */
		public int value() {
			return 600;
		}

		/**
		 * Return the reason phrase of this status code.
		 */
		public String getReasonPhrase() {
			return "NO_DATA_FOUND";
		}

		/**
		 * Return the getErrorMessages of this status code.
		 */
		public List<String> getErrorMessages() {
			List<String> list = new ArrayList<String>();
			list.add("***** No Data Found ***");
			return list;
		}
	},

	/*
	 * Database Layer Specific Error Codes
	 */

	HIBERNATEEXCEPTION() {
		/**
		 * Return the integer value of this status code.
		 */
		public int value() {
			return 1000;
		}

		/**
		 * Return the reason phrase of this status code.
		 */
		public String getReasonPhrase() {
			return "DATA BASE SCRIPT ERROR";
		}

		/**
		 * Return the getErrorMessages of this status code.
		 */
		public List<String> getErrorMessages() {
			List<String> list = new ArrayList<String>();
			list.add("DATA BASE SCRIPT ERROR");
			return list;
		}
	},
	POSTGRES_CONNECTION_CLOSED() {
		/**
		 * Return the integer value of this status code.
		 */
		public int value() {
			return 1001;
		}

		/**
		 * Return the reason phrase of this status code.
		 */
		public String getReasonPhrase() {
			return "POSTGRES CONNECTION CLOSED";
		}

		/**
		 * Return the getErrorMessages of this status code.
		 */
		public List<String> getErrorMessages() {
			List<String> list = new ArrayList<String>();
			list.add("POSTGRES connection has been closed.");
			return list;
		}
	},
	SOCKET_TIME_OUT() {
		/**
		 * Return the integer value of this status code.
		 */
		public int value() {
			return 1002;
		}

		/**
		 * Return the reason phrase of this status code.
		 */
		public String getReasonPhrase() {
			return "SOCKET TIME OUT ERROR";
		}

		/**
		 * Return the getErrorMessages of this status code.
		 */
		public List<String> getErrorMessages() {
			List<String> list = new ArrayList<String>();
			list.add("TCP/IP Read timed out");
			return list;
		}
	};

	private int value;

	private String reasonPhrase;

	private List<String> errorMessages;

	/**
	 * Return the integer value of this status code.
	 */
	public int value() {
		return this.value;
	}

	/**
	 * Return the reason phrase of this status code.
	 */
	public String getReasonPhrase() {
		return this.reasonPhrase;
	}

	/**
	 * Return the getErrorMessages of this status code.
	 */
	public List<String> getErrorMessages() {
		return errorMessages;
	}

}
