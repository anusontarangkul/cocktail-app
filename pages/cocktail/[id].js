import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktail } from '../../redux/singleCocktail';
import Nav from '../../components/Nav/Nav'
import styles from './cocktail.module.css'
import IngredientsTag from '../../components/IngredientsTag/IngredientsTag'
import Button from '@mui/material/Button';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

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
    let index = 1;
    let ingredientArray = [];
    while (results.drinks[0]['strIngredient' + index]) {
        console.log(index)
        ingredientArray.push({ name: results.drinks[0]['strIngredient' + index], amount: results.drinks[0]['strMeasure' + index] ? results.drinks[0]['strMeasure' + index] : "A dash " });
        index++;
    }
    console.log('results', results)
    console.log(ingredientArray)
    console.log(results.drinks[0].strInstructions)
    let instructionsArray = results.drinks[0].strInstructions.match(/[^\.!\?]+[\.!\?]+/g);
    console.log(instructionsArray)
    return (
        <>
            <Nav />
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
                <Button className={styles.saveBtn} variant="contained" startIcon={<BookmarkBorderIcon />}>Save</Button>
            </main>
        </>
    )
}

export default Cocktail
