import '../public/styles/globals.css'
import "swiper/scss"; // core Swiper
import "swiper/scss/navigation"; // Navigation module
import "swiper/scss/pagination"; // Pagination module
import "swiper/scss/effect-fade"; // effect-fade module
import "swiper/scss/effect-creative"; // effect-creative module
import 'react-toastify/dist/ReactToastify.css';

// import '../public/styles/iconStyle.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, ...rest }: AppProps) {
  // if you are in react, you dont need to use wrapper. you can just use provider tag 
  // this is for nextjs
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
