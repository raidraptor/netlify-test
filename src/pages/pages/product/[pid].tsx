import { Typography, Grid, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NumberField from '../../components/numberfield'
import { useCart } from '../../hooks/useCart'
import { getItem } from '../../helper/productQuery'
import { useRouter } from 'next/router'
import { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

 function ProductPage ({productInfo}:InferGetStaticPropsType<typeof getStaticProps>)  {
  const { add } = useCart()
  const [q, b] = React.useState(1)
  const addCart = (): void => {
    add({
      id: productInfo?.id,
      name: productInfo?.name,
      price: productInfo?.price,
      quantity: q
    })
  }
  return (
    <>      <Head>
    <title>{productInfo?.name}</title>
    <meta name="description" content={productInfo?.currencySymbol+productInfo?.price} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={8}>
          <Box component="img" src="/Koharu.jpg" maxWidth={600} height={'100%'} width={'100%'} />
        </Grid>
        <Grid item xs={8} md = {4}>
          <Grid container
            spacing={4}
            direction="column"
            justifyContent="center"
            alignItems="center"
            height={400}>
            <Grid item ><Typography variant="h5" align="center">{productInfo.name}</Typography></Grid>
            <Grid item ><NumberField setState = {b} /></Grid>
            <Grid item ><Button variant="contained" onClick={addCart}>Add To Cart</Button></Grid>
          </Grid>
        </Grid>
      </Grid></>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid:  "Gawr Gura Dakimakura Cover 1" }},
      {
        params: { pid: "Gawr Gura Dakimakura Cover 2" },
      },
    ],
    fallback: false
  }
}

export async function getStaticProps(context: { params: { pid: any } }) {
  const pid = context.params.pid
  const productName = pid as string?? 'broken'
  const productInfo = getItem(productName)!!
  return {
    props: {productInfo:productInfo}, // will be passed to the page component as props
  }
}
export default ProductPage