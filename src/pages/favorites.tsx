import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { SideBar } from '../components/SideBar'

const FavoritesPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Favorites
                </title>
            </NextHead>
            <SideBar>
                <p>
                    favoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavorites
                    favoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavorites
                    favoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavorites
                    favoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavoritesfavorites
                </p>
            </SideBar>
        </>
    )
}

export default FavoritesPage