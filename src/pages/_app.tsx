import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

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

    return (
        <>
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
        </>
    )
}

export default App
