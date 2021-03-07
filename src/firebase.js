import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC4tvTFHEi8yeLzSMfhbvwzawbPYtd1Kyc",
	authDomain: "iminn-client-6a4d7.firebaseapp.com",
	projectId: "iminn-client-6a4d7",
	storageBucket: "iminn-client-6a4d7.appspot.com",
	messagingSenderId: "667138279971",
	appId: "1:667138279971:web:fcb9e2a1a6529755a9ff96",
	measurementId: "G-21VSE2XNDE",

	// apiKey: "AIzaSyDrHp4HWv66P9KNKrEzP-jhRhgV86SeIaI",
	// authDomain: "iminn-client-b058b.firebaseapp.com",
	// projectId: "iminn-client-b058b",
	// storageBucket: "iminn-client-b058b.appspot.com",
	// messagingSenderId: "275224639411",
	// appId: "1:275224639411:web:39533a8ddf3ace604e7dc6",
	// measurementId: "G-WQ6ZQDDG71",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
