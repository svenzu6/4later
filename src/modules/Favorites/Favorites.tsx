import firebase from 'firebase'
import React from 'react'

import { LinkCard } from '../../components/LinkCard'
import { Collections } from '../../enums/firebaseCollections'
import { useCurrentUser } from '../../lib/useCurrentUser'
import type { LinkType } from '../Dashboard'

import {
    FavoritesListContent,
    FavoritesListRoot,
    FavoritesRoot,
    FavoritesTitle,
} from './Favorites.styles'

export const Favorites: React.FunctionComponent = () => {
    const user = useCurrentUser()

    const [links, setLinks] = React.useState<LinkType[]>([])

    const fetchLinks = () => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .where('userId', '==', user?.id)
            .onSnapshot((results) => {
                const fetchedLinks: LinkType[] = []

                results.forEach((result) => {
                    const fetchedLink = result.data() as LinkType

                    fetchedLinks.push(fetchedLink)
                })

                setLinks(fetchedLinks)
            })
    }

    React.useEffect(() => {
        fetchLinks()
    }, [user])

    return (
        <FavoritesRoot>
            <FavoritesTitle>
                FAVORITES
            </FavoritesTitle>
            <FavoritesListRoot>
                <FavoritesListContent>
                    {links.map((link) => {
                        return (
                            link.favorite
                                ? (
                                    <LinkCard
                                        key={link.id}
                                        link={link}
                                    />
                                )
                                : '')
                    })}
                </FavoritesListContent>
            </FavoritesListRoot>
        </FavoritesRoot>
    )
}