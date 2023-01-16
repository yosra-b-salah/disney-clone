import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	//TODO: add apiKey
	authDomain: "disneyplus-clone-f3c1d.firebaseapp.com",
	projectId: "disneyplus-clone-f3c1d",
	storageBucket: "disneyplus-clone-f3c1d.appspot.com",
	messagingSenderId: "913161804084",
	appId: "1:913161804084:web:deaa41e34f44b3ad82ad61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup };
export default db;




