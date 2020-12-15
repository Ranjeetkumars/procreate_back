package com.pro.exceptions;

public final class InSufficientInputException extends Exception{
	
	private static final long serialVersionUID = 7842170097518321488L;

	/**
	 * Constructs a InSufficientInputException using the given exception message.
	 *
	 * @param message The message explaining the reason for the exception
	 */
	public InSufficientInputException(String description) {
		super(description);
	}

	/**
	 * Constructs a InSufficientInputException using the given message and underlying
	 * cause.
	 *
	 * @param cause The underlying cause.
	 */
	public InSufficientInputException(Throwable cause) {
		super(cause);
	}

	/**
	 * Constructs a InSufficientInputException using the given message and underlying
	 * cause.
	 *
	 * @param message The message explaining the reason for the exception.
	 * @param cause   The underlying cause.
	 */
	public InSufficientInputException(String message, Throwable cause) {
		super(message, cause);
	}
}
