import React from 'react'
import { authentication } from '../lib/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const login = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={signInWithGoogle}>Login</button>
        </div>
    )
}

export default login
