import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";


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



export const RegisterNewUser = () => {
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  let navigate = useNavigate()


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      localStorage.setItem("accessToken", currentUser.accessToken)
      if (localStorage.getItem("accessToken")) {
        navigate('/home')
      }
    })
  }
  return (
    <div>
      <div>
        <div>
          <h3>Register New User</h3>
        </div>
        <div>
          <Input size="sm" placeholder="Email..." onChange={(event) => { setRegisterEmail(event.target.value) }} />
        </div>
        <div>
          <Input size="sm" placeholder="Password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
        </div>
        <div>
          <Button onClick={register}>Register</Button>
        </div>
      </div>
    </div>
  )
}

export const LoginExistingUser = () => {
  const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  let navigate = useNavigate()
  const login = async () => {

    try {

      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
      localStorage.setItem("accessToken", currentUser.accessToken)
      if (localStorage.getItem("accessToken")) {
        navigate('/home')
      }
    })

  }
  return (
    <div>
      <div>
        <div>
          <h6>Login</h6>
        </div>
        <div>
          <Input size="sm" placeholder="Email..." onChange={(event) => { setLoginEmail(event.target.value) }} />
        </div>
        <div>
          <Input size="sm" placeholder="Password..." onChange={(event) => { setLoginPassword(event.target.value) }} />
        </div>
        <div>
          <Button onClick={login}>Login</Button>
        </div>
        <p className="forgotPasswordLink" onClick={sendPasswordResetEmail}>Forgot password?</p>
      </div>
    </div>
  )
}


export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
      const accessToken = result.user.accessToken
      localStorage.setItem("name", name)
      localStorage.setItem("accessToken", accessToken)
    }).catch((error) => {
      console.log(error)
    });
};
export const logOutUser = () => {
  const logout = async () => {
    await signOut(auth)
  }
  return (
    <div>
      <div>
        <Button onClick={logout}>Sign Out</Button>
      </div>
    </div>
  )
}