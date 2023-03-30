import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import Navbar from './navbar'
import Navdrawer from './navdrawer'

const Header: React.FC = props => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  return (
    <Box component="header">
      <Navbar onDrawerToggle={handleDrawerToggle} />
      <Toolbar />
      <Navdrawer open={mobileOpen} onDrawerToggle={handleDrawerToggle} />
    </Box>
  )
}

export default Header