import React, { useEffect } from 'react'
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
    console.log('starting page')
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
        inSaved = saved.includes(results.drinks[0].idDrink)

    }

    const addToSaved = async () => {
        console.log('userid', user.uid)
        let cocktailId = results.drinks[0].idDrink


        const cocktailRef = doc(db, "saved", user.uid);
        try {
            await setDoc(
                cocktailRef,
                { cocktails: saved ? [...saved, cocktailId] : [cocktailId] },
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
                { cocktails: saved.filter((cocktail) => cocktail !== cocktailId) },
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
            <Nav />
            {(status === "loading") &&
                <p>loading</p>
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
                    {inSaved ?
                        <Button
                            className={styles.removeBtn}
                            variant="contained"
                            onClick={removeFromSaved}
                        >Remove</Button>
                        :
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
