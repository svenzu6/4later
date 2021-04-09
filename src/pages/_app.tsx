import { CssBaseline } from '@material-ui/core'
import firebase from 'firebase'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { config } from '../../firebase'

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
    const { Component, pageProps } = props

    if (firebase.apps.length) {
        firebase.app()
    } else {
        firebase.initializeApp(config)
    }

    return (
        <>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
        </>
    )
}

export default App
