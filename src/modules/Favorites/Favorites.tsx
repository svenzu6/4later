import firebase from 'firebase/app'
import React from 'react'

import { LinkCard } from '../../components/LinkCard'
import { Collections } from '../../enums/firebaseCollections'
import { useCurrentUser } from '../../lib/useCurrentUser'
import type { LinkType } from '../Dashboard'

import {
    FavoritesContent,
    FavoritesRoot,
} from './Favorites.styles'

export const Favorites: React.FunctionComponent = () => {
    const [links, setLinks] = React.useState<LinkType[]>([])
    const currentUser = useCurrentUser()

    React.useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection(Collections.LINKS)
            .where('userId', '==', currentUser.id)
            .where('isFavorite', '==', true)
            .onSnapshot((results) => {
                const fetchedFavLinks: LinkType[] = []

                results.forEach((result) => {
                    const fetchedLink = result.data() as LinkType

                    fetchedFavLinks.push(fetchedLink)
                })

                setLinks(fetchedFavLinks)
            })

        return () => {
            unsubscribe()
        }
    }, [currentUser?.id])

    return (
        <FavoritesRoot>
            <FavoritesContent>
                {links.map((link) => {
                    return (
                        <LinkCard
                            key={link.id}
                            link={link}
                        />
                    )
                })}
            </FavoritesContent>
        </FavoritesRoot>
    )
}