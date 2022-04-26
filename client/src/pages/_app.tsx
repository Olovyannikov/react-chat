import type { AppProps } from 'next/app'
import '@/styles/general/_variables.scss';
import '@/styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Component {...pageProps} />
)

export default MyApp
