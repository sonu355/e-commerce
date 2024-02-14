import React, { useEffect, useState } from 'react'
import { Typography, AppBar, Toolbar, Grid, Box, styled, InputBase, Container, CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductsCard from './ProductsCard';
import PaginationPage from '../PaginationPage';

const API_KEY = 'https://fakestoreapi.com/products'

const Search = styled('div')(({ theme, isActive }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isActive ? 'gray' : '#fff',
  '&:hover': {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: '1px solid red'
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
    const [isLoading, setIsLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1)
    // const pageSize = 8;

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(API_KEY)
        const data = await response.json()
        setProducts(data)
        setIsLoading(false)
      }
      fetchData()
    }, []);

    // const handlePageChange = (event, value) => {
    //   setCurrentPage(value);
    // };

  return (
    <Container>
          <Box sx={{flexGrow: 1}}>
            <AppBar style={{alignItems: 'center'}} color='default' position='static' elevation={0}>
                <Toolbar>
                    <LocalMallIcon fontSize='large' color='error'></LocalMallIcon>
                    <Typography variant='h3' style={{}} color='error'>SlipCart</Typography>
                </Toolbar>
                <Search isActive={isActive} style={{width:'350px', alignItems:'center', marginBottom: '20px', }}>
              
                
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                
                  <StyledInputBase
                    placeholder="Search Products..."
                    inputProps={{ 'aria-label': 'search' }}
                    onFocus={() => setIsActive(true)}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Search>
            </AppBar>
          </Box>
          {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
          <CircularProgress color='error'/>
        </Box>
      ) : (
        <Grid container style={{marginTop: '0px', display:'flex', alignItems:'center'}} spacing={5}>
            {products
            .filter((product) => {
              return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search)
            })
            .map(product => (
                <Grid item key={product.id} >
                    <ProductsCard product={product} />
                </Grid>
            ))}
        </Grid>
      )}
        <PaginationPage products={products}/>
      
    </Container>
  )
}
export default Home
