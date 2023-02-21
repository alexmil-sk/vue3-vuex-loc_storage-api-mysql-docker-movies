import {
	getAuth,
	signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});


	

	// Import the functions you need from the SDKs you need
	import {
		initializeApp
	} from "firebase/app";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyAVA_Hog45iBfr9VDEr5bhsEDHXwG_T9a8",
		authDomain: "fb-test-project-82650.firebaseapp.com",
		databaseURL: "https://fb-test-project-82650-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "fb-test-project-82650",
		storageBucket: "fb-test-project-82650.appspot.com",
		messagingSenderId: "813270797155",
		appId: "1:813270797155:web:bcedf9fef83be3ed00a156"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);