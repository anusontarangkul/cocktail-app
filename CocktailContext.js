import React, { createContext, useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, db } from './firebase'
import { doc, onSnapshot } from "@firebase/firestore"

const Cocktail = createContext()

const CocktailContext = ({ children }) => {



    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: 'success'
    })
    const [saved, setSaved] = useState([])

    useEffect(() => {
        if (user) {
            const cocktailRef = doc(db, 'saved', user.uid)
            var unsubscribe = onSnapshot(cocktailRef, cocktail => {
                if (cocktail.exists()) {
                    console.log(cocktail.data().cocktails)
                    setSaved(cocktail.data().cocktails)
                } else {
                    console.log('no items in watchlist')
                }
            })
            return () => {
                unsubscribe()
            }
        }

    }, [user])

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('auth changed')
                setUser(user);
                console.log('user', user)
            }
            else setUser(null)
        })
    }, [])

    return (
        <Cocktail.Provider value={{ user, alert, setAlert, saved, setSaved }}>
            {children}
        </Cocktail.Provider>
    )
}


export default CocktailContext

export const CocktailState = () => {
    return useContext(Cocktail)
}