import '../styles/main.css'
import '../styles/add.css'
import '../assets/fonts/fonts.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
