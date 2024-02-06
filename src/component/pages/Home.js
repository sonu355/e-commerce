import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, GridCard,Paper } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductsCard from './ProductsCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    // console.log(products)
  return (
    <div>
      <AppBar color='default' elevation={0}>
        <Toolbar>
            <LocalMallIcon fontSize='large'></LocalMallIcon>
            <Typography variant='h4' color='black'>SlipCart</Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{marginTop: '75px', display:'flex'}} spacing={5}>
        {products.map(product => (
            <Grid item key={product.id}>
                <ProductsCard product={product} />
            </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
