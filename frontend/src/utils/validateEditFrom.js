export default function formIsValid(movie, errors, params) {
	let isValid = true;

	//=========================================================

	if (!movie.id) {
		errors.fieldId = 'The ID field must be filled';
		isValid = false;
	} else if (movie.id < 1) {
		errors.fieldId = 'The ID number should not be less then 1';
		isValid = false;
	} else if (movie.id !== params) {
		errors.fieldId = 'The ID number cannot be changed';
		isValid = false;
	} else {
		errors.fieldId = null;
	}

	//=========================================================

	if (!movie.title) {
		errors.fieldTitle = 'The TITLE field must be filled';
		isValid = false;
	} else if (movie.title.length > 20) {
		errors.fieldTitle = 'Length of the TITLE should be less than 20 characters';
		isValid = false;
	} else {
		errors.fieldTitle = '';
	}

	//=========================================================

	if (!movie.image) {
		errors.fieldImage = 'The POSTER field would be better to be filled';
		isValid = false;
	} else {
		errors.fieldImage = null;
	}
	//=========================================================

	if (!movie.year) {
		errors.fieldYear = `The YEAR should be in period from 1900 ... to ${new Date().getFullYear()}`;
		isValid = false;
	} else if (movie.year < 1900) {
		errors.fieldYear = 'The YEAR should not be less then 1900';
		isValid = false;
	} else if (movie.year > new Date().getFullYear()) {
		errors.fieldYear = 'The YEAR should not be bigger then 2023';
		isValid = false;
	} else {
		errors.fieldYear = null;
	}

	//=========================================================
	if (!movie.rating) {
		isValid = false;
	}
	//=========================================================

	return isValid;
}