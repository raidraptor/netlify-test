import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import img from 'Koharu.jpg'
import Link from 'next/link'

interface Props {
  product: {
    id: string;
    name: string;
    inventory: number;
    price: number;
    currencySymbol: string;
    size: string;
    material: string;
    series: string;
    cover: string[];
  }
  children?: React.ReactNode
}

export const Product: React.FC<Props> = ({ product, children }) => {
  const url = '/product/' + product.name
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link}
          href={url}>
          <CardMedia
            component="img"
            height="img280"
            image='/Koharu.jpg'
            alt="Koharu"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.currencySymbol} {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
Product.propTypes = {
  children: PropTypes.node,
}