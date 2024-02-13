import React from 'react'
import {Button, Card, CardMedia,Typography, CardContent, CardActions, Skeleton, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength - 3) + `...`;
}

const useStyles = makeStyles({
    card: {
        height: 'auto', 
        width: '250px',
        margin: '3px',
        boxShadow: '0px 4px 8px rgba(0, 0,0,0.1)'
    },
    media: {
        height: '200px',
        width: '200px',
        margin: 'auto'
    }
})

const ProductsCard = ({ product }) => {
const classes = useStyles()
const truncatedTitle = truncateText(product.title, 20)
const truncatedDescription = truncateText(product.description, 100);
    
    return (
        <>
            <Card className={classes.card}>
                {product ? (
                    <CardMedia className={classes.media} image={product.image} />
                ) : (
                    <Skeleton variant="rectangular" width={200} height={200} />
                )}
                <CardContent>
                    <Typography variant='h6'>{truncatedTitle}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {truncatedDescription}
                    </Typography>
                    <Typography> {product ? `${product.price}$` : <CircularProgress size={20}/>}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={(e) => console.log("clicked")}  variant='contained' color='error'>Buy</Button>
                </CardActions>
            </Card>
        </>
      );
}
export default ProductsCard
