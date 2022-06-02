import { LoginProvider } from '../contexts/handleLogin.js';
import { AnimatePresence } from "framer-motion";
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <LoginProvider>
      <NextNProgress color="#fdc62d" height={3} options={{ showSpinner: false }} />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </LoginProvider>
  )
};

export default MyApp;