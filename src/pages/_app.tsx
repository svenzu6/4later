import { CssBaseline } from '@material-ui/core'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import type { AppProps } from 'next/app'
import NextApp from 'next/app'
import getConfig from 'next/config'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%; 
  }
  body {
    height: 100%; 
  }
  a {
    color: inherit; 
    text-decoration: inherit; 
}
  #__next {
      height: 100%;
  }
`

const App: React.FunctionComponent<AppProps> = (props) => {
    const { Component, pageProps } = props
    const { publicRuntimeConfig } = getConfig()

    if (!firebase.apps.length) {
        firebase.initializeApp({ apiKey: publicRuntimeConfig.API_KEY ?? '',
            appId: publicRuntimeConfig.APP_ID ?? '',
            authDomain: publicRuntimeConfig.AUTH_DOMAIN ?? '',
            messagingSenderId: publicRuntimeConfig.MESSAGING_SENDER_ID ?? '',
            projectId: publicRuntimeConfig.PROJECT_ID ?? '',
            storageBucket: publicRuntimeConfig.STORAGE_BUCKET ?? '' })
    } else {
        firebase.app() // if already initialized, use that one
    }

    return (
        <>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
        </>

    )
}

class Root extends NextApp {

    // eslint-disable-next-line require-await, @typescript-eslint/require-await
    static async getInitialProps() {
        return { pageProps: {} }
    }

    public render(): JSX.Element {
        return (
            <App {...this.props} />
        )
    }

}

export default Root