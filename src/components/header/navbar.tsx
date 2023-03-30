import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import Link from 'next/link'
import { MAIN_NAV } from '../routes'
import { useCart } from '../../hooks/useCart'
import SearchInput from '../searchInput'

interface NavbarProps {
  onDrawerToggle: () => void
}

const Navbar: React.FC<NavbarProps> = props => {
  const { onDrawerToggle } = props
  const { total } = useCart()

  return (
    <AppBar component="nav">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="open drawer"
            color="inherit"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={onDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {MAIN_NAV.map((item) => (
              <Button
                component={Link}
                href={item.path}
                key={item.path}
                sx={{
                  color: '#fff',
                  textTransform: 'inherit',
                  minWidth: 0,
                  '&:first-of-type': {
                    pl: 0,
                  }
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Box>

        <IconButton aria-label="cart" component={Link}
          href="/cart">
          <Badge badgeContent={total} color="error">
            <ShoppingCart/>
          </Badge>
        </IconButton>

        <SearchInput
          sx={{
            ml: 1,
            width: {
              xs: '100%',
              sm: 'auto',
            }
          }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
