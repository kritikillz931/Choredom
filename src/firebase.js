import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB64a_LwBa4OhXDMOePX7HkLbEvC5ETDUY",
  authDomain: "choredom-d1fa3.firebaseapp.com",
  projectId: "choredom-d1fa3",
  storageBucket: "choredom-d1fa3.appspot.com",
  messagingSenderId: "771062121538",
  appId: "1:771062121538:web:92048c439c2af7783f99db",
  measurementId: "G-Q4FQ5EZSTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
  }).catch((error) => {
    console.log(error)
  });
};