import { Button, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import NumberField from '../components/numberfield'
import { useCart } from '../hooks/useCart'
import type { CartItem } from '../helper/cart'
import { NextPage } from 'next'
import axios from 'axios'

const CartPage: NextPage = () => {
  const { items, update, clear } = useCart()

  const checkout = async()=>{
    const res = await axios({
      url: '/api/stripe',
      data: items,
      method: 'POST'
    })
    const body = await res.data
    window.location.href = body.url
  }

  const updateQuantity = (quantity: number, item: CartItem): void => {
    update({
      ...item,
      quantity
    })
  }

  const clearCart = (): void => {
    clear()
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <>
      <Typography variant="h5" align="center">Cart</Typography>
      <TableContainer>
        <Table aria-label="customized table" sx={{ minWidth: 700, maxWidth: 900 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Item</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">
                  <NumberField defaultValue={row.quantity} setState={(val) => { updateQuantity(val, row) }} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.quantity * row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={checkout} >Checkout</Button>
      <Button variant="contained" onClick={clearCart}>Clear Cart</Button>
    </>
  )
}

export default CartPage
