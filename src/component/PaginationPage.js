// import React, { useState } from 'react'
// import { Box,Pagination } from '@mui/material';
// import ProductsCard from './pages/ProductsCard';

// const pageSize = 8;
// const PaginationPage = ({products}) => {
//   console.log(products)
//   const[currentPage, setCurrentPage] = useState(1)
//   const handlePageChange = (e, value) => {
//     setCurrentPage(value)
//   }
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const displayedProducts = products.slice(startIndex, endIndex);


//   return (
//     <Box style={{alignItems:'center', justifyContent:'center', display:'flex', margin:'30px 0 30px 0'}}>
//       <Pagination count={Math.ceil(products.length / pageSize)} color='primary'
//         onChange={handlePageChange}
//       />
//     </Box>
//   )
// }

// export default PaginationPage;
import React, { useState } from 'react';
import { Box, Pagination } from '@mui/material';
import ProductsCard from './pages/ProductsCard';

const PaginationPage = ({ products, currentPage, pageSize, onPageChange }) => {

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <Box style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '30px 0 30px 0' }}>
      <Pagination count={3} color="error" page={currentPage} onChange={onPageChange} />
    </Box>
  );
};

export default PaginationPage;
  