import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, GridCard,Paper } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    console.log(products)
  return (
    <div>
      <AppBar color='default' elevation={0}>
        <Toolbar>
            <LocalMallIcon fontSize='large'></LocalMallIcon>
            <Typography variant='h4' color='black'>SlipCart</Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{marginTop: '75px'}} spacing={3}>
        {products.map(product => (
            <Grid item key={product.id}>
                <Paper>{product.image}</Paper>
            </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
