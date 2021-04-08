import { CssBaseline } from '@material-ui/core'
import React from 'react'

const App = (props): JSX.Element => {
    const { Component, pageProps } = props

    return (
        <>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    )
}

export default App
