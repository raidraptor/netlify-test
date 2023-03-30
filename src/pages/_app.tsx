import '@/styles/globals.css'
import { PrimaryTheme } from '../theme'
import type { AppProps } from 'next/app'
import { PageLayout } from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryTheme>
  <PageLayout >
  <Component {...pageProps} />
  </PageLayout>
  </PrimaryTheme>

  )
}
