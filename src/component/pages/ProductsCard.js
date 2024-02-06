import React from 'react'
import { Card, CardMedia,Typography, CardContent, CardActions, Button } from '@mui/material';

const ProductsCard = ({ product }) => {
    return (
        <Card style={{height: '450px', width: '250px'}}>
          <CardMedia
            sx={{ height: '200px', width: '200px' }}
            image={product.image}
          />
          <CardContent>
            <Typography variant='h6'>{product.title}</Typography>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
            <Typography> {product.price}$</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default ProductsCard
