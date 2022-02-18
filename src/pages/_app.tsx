import { AppProps } from 'next/app';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
