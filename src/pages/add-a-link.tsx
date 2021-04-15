import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { Layout } from '../components/Layout'
import { LinkAdd } from '../modules/LinkAdd/LinkAdd'

const AddLinksPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Add a Link
                </title>
            </NextHead>
            <Layout>
                <LinkAdd />
            </Layout>
        </>
    )
}

export default AddLinksPage