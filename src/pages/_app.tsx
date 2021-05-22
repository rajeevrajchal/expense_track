import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
import {ContextProvider} from "../context/store";

function MyApp({Component, pageProps}) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}

export default MyApp
