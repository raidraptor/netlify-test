import { ThemeProvider, createTheme } from '@mui/material/styles'
import { lightPalette } from './styles/light'

/**
 * primary theme
 */
export const primary = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

interface PrimaryThemeProps {
  children?: React.ReactNode
}

/**
 * primary theme provider
 * @param props 
 * @returns 
 */
export const PrimaryTheme: React.FC<PrimaryThemeProps> = props => (
  <ThemeProvider theme={primary}>
    {props.children}
  </ThemeProvider>
)