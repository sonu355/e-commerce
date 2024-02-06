import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, GridCard } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
  return (
    <div>
      <AppBar color='error' elevation={0}>
        <Toolbar>
            <LocalMallIcon fontSize='large'></LocalMallIcon>
            <Typography variant='h4' color='black'>Amazon</Typography>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home
