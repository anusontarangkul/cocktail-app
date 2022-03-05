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
        try {
            dispatch(getCocktail(cocktailId))
        } catch (e) {
            console.log(e)
        }


    }, [router.isReady])

    let instructionsArray
    let index = 1;
    let ingredientArray = [];

    if (status === 'success') {
        while (results.drinks[0]['strIngredient' + index]) {
            ingredientArray.push({ name: results.drinks[0]['strIngredient' + index], amount: results.drinks[0]['strMeasure' + index] ? results.drinks[0]['strMeasure' + index] : "A dash " });
            index++;
        }
        instructionsArray = results.drinks[0].strInstructions.match(/[^\.!\?]+[\.!\?]+/g);

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
                    <Button className={styles.saveBtn} variant="contained" startIcon={<BookmarkBorderIcon />}>Save</Button>
                </main>
            }
        </>
    )
}

export default Cocktail
