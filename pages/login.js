import React from 'react'
import { authentication } from '../lib/firebase';
import { auth, provider } from '../lib/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../features/userSlice'



const login = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                dispatch(setActiveUser({
                    userName: result.user.displayName,
                    userEmail: result.user.email
                }))
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // console.log(userName)
                // console.log(userEmail)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(setUserLogOutState())
            console.log('signed out')
            console.log('name', userName)
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)

            // An error happened.
        });
        // auth.signOut()
        //     .then(() => {
        //         dispatch(setUserLogOutState())
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }
    // const signInWithGoogle = () => {
    //     const provider = new GoogleAuthProvider()
    //     signInWithPopup(authentication, provider)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
    return (
        <div>
            <button onClick={handleSignIn}>Login</button>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default login
