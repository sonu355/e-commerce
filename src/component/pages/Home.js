import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, Box, styled, alpha, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductsCard from './ProductsCard';

const API_KEY = 'https://fakestoreapi.com/products'

const flexContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const Search = styled('div')(({ theme, isActive }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isActive ? '#fff' : 'gray',
  '&:hover': {
    backgroundColor: "gray",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Home = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

  return (
    <>
          <Box sx={{flexGrow: 1}}>
            <AppBar color='default' position='static' elevation={0}>
                <Toolbar>
                    <LocalMallIcon fontSize='large'></LocalMallIcon>
                    <Typography variant='h3' style={{}} color='black'>SlipCart</Typography>
                </Toolbar>
                <Search isActive={isActive} style={{width:'350px', alignItems:'center', margin: '0px 0px 20px 540px', }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Products"
                    inputProps={{ 'aria-label': 'search' }}
                    onFocus={() => setIsActive(true)}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Search>
            </AppBar>
          </Box>
        <Grid container style={{marginTop: '0px', display:'flex'}} spacing={5}>
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
    </>
  )
}
export default Home
