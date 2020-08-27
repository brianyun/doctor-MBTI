import firebase from "firebase";
import config from "./firebaseConfig";

try {
	firebase.app();
} catch (error) {
	firebase.initializeApp(config);
	//firebase.analytics();
	//console.log(error);
}

export default firebase;
