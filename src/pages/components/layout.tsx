import Header from './header'
import { Link as LinkUI } from '@mui/material'
import Link from 'next/link'

interface Props {
  children?: React.ReactNode
}
export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">
        {children}
      </div>
      <footer className="footer">
        <LinkUI component={Link} href="/TOS" style={{ color: 'white' }}>Terms of Service</LinkUI>
        <LinkUI component={Link} href="/Privacy" style={{ color: 'white' }}>Privacy</LinkUI>
      </footer>
    </>
  )
}