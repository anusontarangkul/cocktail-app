import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function CocktailCard({ cocktail }) {
  const router = useRouter();
  const handleMoreInfoClick = () => {
    console.log(cocktail.idDrink);
    router.push(`/cocktail/${cocktail.idDrink}`);
  };
  return (
    <Card sx={{ width: 300, margin: '1rem auto 0rem auto' }}>
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
        {/* <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size='small'>Save</Button>
        <Button size='small' onClick={handleMoreInfoClick}>
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
