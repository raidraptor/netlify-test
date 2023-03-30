import { Grid, Typography } from '@mui/material'
import { Product } from '../components/product'
import { getItems } from '../helper/productQuery'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

 const Products: NextPage = () => {
  const router = useRouter()
  const {productType} = router.query
  const p = (productType === 'Cover') ? getItems() :  getItems() 

  return (
    <><Typography variant="h5" align="center">Products</Typography>
      <Grid container spacing={4}>
        {p.map((prod) =>
          (<Product key={prod.id} product={prod} ></Product>)
        )}
      </Grid></>
  )
}


export default Products
