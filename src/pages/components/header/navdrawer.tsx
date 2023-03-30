import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { MAIN_NAV } from '../routes'

const DRAWER_WIDTH = 240

interface NavdrawerProps {
  open: boolean
  onDrawerToggle: () => void
}

const Navdrawer: React.FC<NavdrawerProps> = props => {
  const { open, onDrawerToggle } = props

  const drawer = (
    <Box onClick={onDrawerToggle} sx={{ textAlign: 'center' }}>
      <Toolbar
        sx={{
          bgcolor: 'primary.main',
          justifyContent: 'center',
        }}
      >
        <ArrowBackIosNewIcon
          sx={{
            color: 'common.white',
          }}
        />
      </Toolbar>
      <Divider />
      <List>
        {MAIN_NAV.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
          >
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={Link}
              href={item.path}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default Navdrawer