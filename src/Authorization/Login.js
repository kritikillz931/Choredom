import React from "react";
import { signInWithGoogle } from "../firebase";


export const SignIn = () => {
    return (
        <button onClick={signInWithGoogle}>
            Sign In
        </button>
    )
}
