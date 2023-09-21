import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Head from "next/head"
import Header from "../components/Header.js"
import { NotificationProvider } from "web3uikit"

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT交易所</title>
            </Head>
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}
