import type { AppProps } from 'next/app';
import '@/styles/general/_variables.scss';
import '@/styles/styles.scss';
import { store } from '@/store/index';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default MyApp;
