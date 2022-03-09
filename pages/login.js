// import React from 'react'
// import { authentication, db, firebase } from '../lib/firebase';
// import { auth, provider } from '../lib/firebase';
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { useDispatch, useSelector } from 'react-redux'
// import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../features/userSlice'
// import { doc, setDoc, addDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore";


// const login = () => {

//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.user);
//     console.log('page render')
//     console.log('user', user)
//     const auth = getAuth()
//     console.log('auth', auth)
//     const handleSignIn = () => {
//         const auth = getAuth();
//         const provider = new GoogleAuthProvider()
//         signInWithPopup(auth, provider)
//             .then(async (result) => {
//                 console.log('result', result)
//                 let uid = result.user.uid
//                 console.log('uid', uid)
//                 const q = query(collection(db, "user"), where("uid", "==", uid));
//                 const querySnapshot = await getDocs(q);
//                 console.log(querySnapshot, 'querySnapshot')
//                 querySnapshot.forEach((doc) => {
//                     // doc.data() is never undefined for query doc snapshots
//                     console.log(doc.id, " => ", doc.data());
//                 });
//                 console.log('q', q)
//                 addDoc(collection(db, 'users'), {
//                     user: result.user.displayName,
//                     uid: result.user.uid,
//                     token: result.user.accessToken,
//                     photo: result.user.photoURL
//                 })
//                     .then((res) => {
//                         console.log(res)
//                         console.log('user created')
//                         dispatch(setActiveUser({
//                             userName: result.user.displayName,
//                             userEmail: result.user.email
//                         }))
//                         // userName = useSelector(selectUserName)
//                         console.log('after dispatch')
//                         // console.log(user)
//                         console.log('username', user)
//                         // return db.collection('users').doc(cred.user.uid).set({
//                         //     userName: result.user.displayName,
//                         //     userEmail: result.user.email
//                     })

//             }).catch((error) => {
//                 console.log(error)
//             });
//     }

//     const handleSignOut = () => {
//         const auth = getAuth();
//         signOut(auth).then(() => {
//             dispatch(setUserLogOutState())
//             console.log('signed out')
//             console.log('name', user.userName)
//             // Sign-out successful.
//         }).catch((error) => {
//             console.log(error)

//             // An error happened.
//         });
//         // auth.signOut()
//         //     .then(() => {
//         //         dispatch(setUserLogOutState())
//         //     })
//         //     .catch((err) => {
//         //         console.log(err)
//         //     })
//     }
//     // const signInWithGoogle = () => {
//     //     const provider = new GoogleAuthProvider()
//     //     signInWithPopup(authentication, provider)
//     //         .then((res) => {
//     //             console.log(res)
//     //         })
//     //         .catch((err) => {
//     //             console.log(err)
//     //         })
//     // }
//     return (
//         <div>
//             <button onClick={handleSignIn}>Login</button>
//             <button onClick={handleSignOut}>Logout</button>
//         </div>
//     )
// }

// export default login

import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { auth } from '../firebase'
import { CocktailState } from '../CocktailContext'

const login = () => {
    console.log('page reload')
    console.log('auth', auth)
    const googleProvider = new GoogleAuthProvider()
    const handleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log('auth', auth)
                console.log('signin successful')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signed out')
                console.log('auth', auth)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <button onClick={handleSignIn}>Login</button>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default login