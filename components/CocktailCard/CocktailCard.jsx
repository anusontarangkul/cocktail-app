import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import styles from './CocktailCard.module.css';

export default function CocktailCard({ cocktail }) {
  console.log('cocktail', cocktail);
  const router = useRouter();
  const handleMoreInfoClick = () => {
    console.log(cocktail.idDrink);
    router.push(`/cocktail/${cocktail.idDrink}`);
  };
  return (
    <Card
      sx={{
        width: 300,
        margin: '1rem auto 0rem auto',
        cursor: 'pointer',
        // border: '.1rem solid black',
      }}
      className={styles.card}
      onClick={handleMoreInfoClick}
    >
      <CardMedia
        component='img'
        height='240'
        src={cocktail.strDrinkThumb}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {cocktail.strDrink}
        </Typography>
      </CardContent>
    </Card>
  );
}
