// _app.js
import { BottomNav } from '../components/bNav';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion'; 


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      <BottomNav />
    </>
  )
}

export default MyApp