import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, TextField, styled, CircularProgress} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductsCard from './ProductsCard';

const API_KEY = 'https://fakestoreapi.com/products'

const Home = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    console.log(search)

    useEffect(() => {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

  return (
    <div>
        <AppBar color='default' style={{display: 'flex'}} elevation={0}>
            <Toolbar>
                <LocalMallIcon fontSize='large'></LocalMallIcon>
                <Typography variant='h4' color='black'>SlipCart</Typography>
            </Toolbar>
            <TextField onChange={(e) => setSearch(e.target.value)} style={{color: 'white'}} id="outlined-search" label="Search Your Favourite Products" type="search" />
        </AppBar>
        <Grid container style={{marginTop: '75px', display:'flex'}} spacing={5}>
            {products
            .filter((product) => {
              return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search)
            })
            .map(product => (
                <Grid item key={product.id}>
                    <ProductsCard product={product} />
                </Grid>
            ))}
        </Grid>
    </div>
  )
}
export default Home
