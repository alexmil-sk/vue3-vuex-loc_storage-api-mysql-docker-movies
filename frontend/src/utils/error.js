const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'User with this email not exist',
	INVALID_PASSWORD: 'Password is incorrect',
	TOO_MANY_ATTEMPTS_TRY_LATER: 'Too many attempts. Try later!',
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Too many attempts. Try later!';
}