// import App from "next/app";
import NavBar from 'components/NavBar/NavBar.index'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { FontStyles } from 'styles/Font.styles'
import { GlobalStyles, Layout } from 'styles/Global.styles'
import { colorTheme } from 'themes/colorTheme'

function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>React Avancado</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <meta
               name="description"
               content="A simples project for learning to work with TypeScript, React, Next Js, and more. "
            />
         </Head>
         <ThemeProvider theme={colorTheme}>
            <FontStyles />
            <GlobalStyles />
            <NavBar />
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ThemeProvider>
      </>
   )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
