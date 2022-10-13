import '../styles/globals.css';
import { RelationProvider } from '../context/context';
import { prefix } from '../config/config';

function MyApp({ Component, pageProps }) {
    return (
        <RelationProvider value={{ prefix }}>
            <Component {...pageProps} />
        </RelationProvider>
    );
}

export default MyApp;
