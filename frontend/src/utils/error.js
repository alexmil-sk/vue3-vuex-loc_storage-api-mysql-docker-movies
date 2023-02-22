const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'User with this email not exist',
	INVALID_PASSWORD: 'Password is incorrect',
	TOO_MANY_ATTEMPTS_TRY_LATER: 'Too many attempts. Try later!',
	login_error: 'You must enter your account first!',
	SignupNewUserResponse: "Registration was successfull!",
	EMAIL_EXISTS: 'Users with this address already exist',
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error!';
}