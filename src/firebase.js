import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { } from "firebase/firestore";

const firebaseConfig = {
	//TODO: add apiKey
	authDomain: "disneyplus-clone-f3c1d.firebaseapp.com",
	projectId: "disneyplus-clone-f3c1d",
	storageBucket: "disneyplus-clone-f3c1d.appspot.com",
	messagingSenderId: "913161804084",
	appId: "1:913161804084:web:deaa41e34f44b3ad82ad61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup, collection, getDocs, doc, getDoc };
export default db;




