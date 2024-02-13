import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, InputBase, styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductsCard from './ProductsCard';

const API_KEY = 'https://fakestoreapi.com/products'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '350px',
        backgroundColor: 'black',
        color: 'white',
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
          // vertical padding + font size from searchIcon
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

  return (
    <div>
        <AppBar color='default' style={{display: 'flex'}} elevation={0}>
            <Toolbar>
                <LocalMallIcon fontSize='large'></LocalMallIcon>
                <Typography variant='h4' color='black'>SlipCart</Typography>
            </Toolbar>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
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
