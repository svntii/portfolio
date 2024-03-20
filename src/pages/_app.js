// _app.js
import { BottomNav } from '../components/bNav';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
      <BottomNav />
    </>
  )
}

export default MyApp