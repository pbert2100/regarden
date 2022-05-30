import { LoginProvider } from '../contexts/handleLogin.js';
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <NextNProgress color="black" height={3} options={{ showSpinner: false }} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LoginProvider>
  )
};

export default MyApp;