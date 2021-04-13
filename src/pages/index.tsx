import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { Home } from '../modules/Home'

const RegisterPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Register
                </title>
            </NextHead>
            <Home />
        </>
    )
}

export default RegisterPage