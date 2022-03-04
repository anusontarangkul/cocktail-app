import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktail } from '../../redux/singleCocktail';

const Cocktail = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { results, status } = useSelector((state) => state.singleCocktail);

    useEffect(() => {
        if (!router.isReady) {
            return
        }
        const cocktailId = router.query.id
        console.log(cocktailId)
        try {
            dispatch(getCocktail(cocktailId))
            console.log('dispatched')
        } catch (e) {
            console.log(e)
        }


    }, [router.isReady])

    if (!status || status === "loading") {
        return <p>loading</p>
    }
    console.log(results)
    return (
        <div>
            <h1>{results.drinks[0].strDrink}</h1>
        </div>
    )
}

export default Cocktail
