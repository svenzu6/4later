import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { SideBar } from '../components/SideBar'
import { Dashboard } from '../modules/Dashboard/Dashboard'

const DashboardPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Dashboard
                </title>
            </NextHead>
            <SideBar>
                <Dashboard />
            </SideBar>
        </>
    )
}

export default DashboardPage