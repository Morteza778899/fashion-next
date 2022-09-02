import '../public/styles/globals.css'
import "swiper/scss"; // core Swiper
import "swiper/scss/navigation"; // Navigation module
import "swiper/scss/pagination"; // Pagination module
import "swiper/scss/effect-fade"; // effect-fade module

// import '../public/styles/iconStyle.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
