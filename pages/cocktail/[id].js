import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktail } from '../../redux/singleCocktail';
import Nav from '../../components/Nav/Nav'
import styles from './cocktail.module.css'
import IngredientsTag from '../../components/IngredientsTag/IngredientsTag'
import Button from '@mui/material/Button';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { doc, setDoc } from '@firebase/firestore'
import { db } from '../../firebase'
import { CocktailState } from '../../CocktailContext';
import Alert from '../../components/Alert/Alert'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { auth } from '../../firebase';
import Head from 'next/head';

const Cocktail = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { results, status } = useSelector((state) => state.singleCocktail);
    const { user, saved, setSaved, setAlert } = CocktailState()
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        const cocktailId = router.query.id
        try {
            dispatch(getCocktail(cocktailId))
        } catch (e) {
            console.log(e)
        }


    }, [router.isReady])
    let instructionsArray
    let index = 1;
    let ingredientArray = [];
    let inSaved

    if (status === 'success') {
        while (results.drinks[0]['strIngredient' + index]) {
            ingredientArray.push({ name: results.drinks[0]['strIngredient' + index], amount: results.drinks[0]['strMeasure' + index] ? results.drinks[0]['strMeasure' + index] : "A dash " });
            index++;
        }
        instructionsArray = results.drinks[0].strInstructions.match(/[^\.!\?]+[\.!\?]+/g);
        inSaved = saved.some(cocktail => cocktail.idDrink === results.drinks[0].idDrink)
    }

    const addToSaved = async () => {
        console.log('userid', user.uid)
        let idDrink = results.drinks[0].idDrink
        let strDrink = results.drinks[0].strDrink
        let strDrinkThumb = results.drinks[0].strDrinkThumb


        const cocktailRef = doc(db, "saved", user.uid);
        try {
            await setDoc(
                cocktailRef,
                { cocktails: saved ? [...saved, { idDrink, strDrink, strDrinkThumb }] : [{ idDrink, strDrink, strDrinkThumb }] },
                { merge: true }
            )
            setAlert({
                open: true,
                message: `${results.drinks[0].strDrink} successfully saved!`,
                type: "success",
            });
        } catch (error) {
            console.log(error)
        }
    }

    const removeFromSaved = async () => {
        let cocktailId = results.drinks[0].idDrink
        const cocktailRef = doc(db, "saved", user.uid);

        try {
            await setDoc(cocktailRef,
                { cocktails: saved.filter((cocktail) => cocktail.idDrink !== cocktailId) },
                { merge: true }
            )
            setAlert({
                open: true,
                message: `${results.drinks[0].strDrink} removed!`,
                type: "success",
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Cocktail App</title>
                <meta name="description" content="Viewing singlecocktails" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍹</text></svg>" />
            </Head>
            <Nav />
            {(status === "loading") &&
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            {(status === 'success') &&
                <main className={styles.container}>
                    <h1>{results.drinks[0].strDrink}</h1>
                    <img
                        className={styles.img}
                        src={results.drinks[0].strDrinkThumb}
                        alt={results.drinks[0].strDrink}
                    />
                    <h2>Ingredients</h2>
                    <div className={styles.ingredientsContainer}>
                        {ingredientArray.map((ingredient, id) => {
                            return <IngredientsTag name={ingredient.name} amount={ingredient.amount} key={id} />
                        })}
                    </div>
                    <h2>Instructions</h2>
                    <ol className={styles.instructionsContainer}>
                        {instructionsArray.map((step, i) => {
                            return <li key={i} className={styles.steps}>{step}</li>
                        })}
                    </ol>

                    {inSaved && auth.currentUser &&
                        <Button
                            className={styles.removeBtn}
                            variant="contained"
                            onClick={removeFromSaved}
                        >Remove</Button>
                    }
                    {!inSaved && auth.currentUser &&
                        <Button
                            className={styles.saveBtn}
                            variant="contained"
                            startIcon={<BookmarkBorderIcon />}
                            onClick={addToSaved}
                        >Save</Button>
                    }
                </main>
            }
            <Alert />
        </>
    )
}

export default Cocktail
