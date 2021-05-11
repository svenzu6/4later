import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { SideBar } from '../components/SideBar'
import { Favorites } from '../modules/Favorites'

const FavoritesPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Favorites
                </title>
            </NextHead>
            <SideBar>
                <Favorites />
            </SideBar>
        </>
    )
}

export default FavoritesPage