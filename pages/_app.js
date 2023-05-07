import Navbar from '@components/components/Navbar'
import '@components/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar/>
    <Component {...pageProps} />
  </>);
}
