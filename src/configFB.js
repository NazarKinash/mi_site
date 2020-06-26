import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCRq3N1yNQFfqcqo-nfHBSbRKmIAfhhDh8",
	authDomain: "phonebook-9083d.firebaseapp.com",
	databaseURL: "https://phonebook-9083d.firebaseio.com",
	projectId: "phonebook-9083d",
	storageBucket: "phonebook-9083d.appspot.com",
	messagingSenderId: "671683058942",
	appId: "1:671683058942:web:78fede9aa3f31c547219af",
	measurementId: "G-71WH9NQ1KG",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const user = firebase.auth().currentUser;

export { auth, db, user };
