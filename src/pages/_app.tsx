import { CssBaseline } from '@material-ui/core'
import firebase from 'firebase'
import NextApp from 'next/app'
import getConfig from 'next/config'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Layout } from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%; 
  }
  body {
    height: 100%; 
  }
  #__next {
      height: 100%;
  }
`

const App = (props): JSX.Element => {
    const { Component, pageProps, router } = props
    const { publicRuntimeConfig } = getConfig()

    if (firebase.apps.length) {
        firebase.app()
    } else if (publicRuntimeConfig) {
        firebase.initializeApp({
            apiKey: publicRuntimeConfig.API_KEY ?? '',
            appId: publicRuntimeConfig.APP_ID ?? '',
            authDomain: publicRuntimeConfig.AUTH_DOMAIN ?? '',
            messagingSenderId: publicRuntimeConfig.MESSAGING_SENDER_ID ?? '',
            projectId: publicRuntimeConfig.PROJECT_ID ?? '',
            storageBucket: publicRuntimeConfig.STORAGE_BUCKET ?? '',
        })
    }
    if (router.pathname.startsWith('/favorites')) {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
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