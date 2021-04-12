import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { Login } from '../modules/Login'

const LoginPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Register
                </title>
            </NextHead>
            <Login />
        </>
    )
}

export default LoginPage