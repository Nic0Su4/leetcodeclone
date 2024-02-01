import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <Head>
        <title>LeetCodeClone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta name='description' content='Aplicación web que contiene problemas de leetcode con soluciones en video' />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
