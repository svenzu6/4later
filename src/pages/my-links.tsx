import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { Layout } from '../components/Layout'

const MyLinksPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    My Links
                </title>
            </NextHead>
            <Layout />
        </>
    )
}

export default MyLinksPage