import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { Dashboard } from '../modules/Dashboard'

const HomePage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Dashboard
                </title>
            </NextHead>
            <Dashboard />
        </>
    )
}

export default HomePage