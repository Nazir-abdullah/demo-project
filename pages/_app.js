import { GlobalStyle } from "config/globalStyles";
import Layout from "components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
export default MyApp;
