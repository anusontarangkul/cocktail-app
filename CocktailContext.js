import React, { createContext, useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, db } from './firebase'
const Cocktail = createContext()

const CocktailContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: 'success'
    })

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
        <Cocktail.Provider value={{ user }}>
            {children}
        </Cocktail.Provider>
    )
}


export default CocktailContext

export const CocktailState = () => {
    return useContext(Cocktail)
}