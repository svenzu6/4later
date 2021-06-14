import firebase from 'firebase'
import React from 'react'

import { LinkCard } from '../../components/LinkCard'
import { Collections } from '../../enums/firebaseCollections'
import { useCurrentUser } from '../../lib/useCurrentUser'

import {
    DashboardContent,
    DashboardRoot,
} from './Dashboard.styles'
import type { LinkType } from './Dashboard.types'

export const Dashboard: React.FunctionComponent = () => {
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
    }, [user?.id])

    return (
        <DashboardRoot>
            <DashboardContent>
                {links.map((link) => {
                    return (
                        <LinkCard
                            key={link.id}
                            link={link}
                        />
                    )
                })}
            </DashboardContent>
        </DashboardRoot>
    )
}
