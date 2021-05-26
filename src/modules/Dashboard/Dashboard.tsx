import firebase from 'firebase'
import React from 'react'

import { LinkCard } from '../../components/LinkCard'
import { Collections } from '../../enums/firebaseCollections'
import { useCurrentUser } from '../../lib/useCurrentUser'

import {
    DashboardListContent,
    DashboardListRoot,
    DashboardRoot,
    DashboardTitle,
    DashboardTopContainer,
} from './Dashboard.styles'
import type { LinkType } from './Dashboard.types'
import { DashboardCreateDialog } from './DashboardCreateDialog'

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
            <DashboardTopContainer>
                <DashboardTitle>
                    DASHBOARD
                </DashboardTitle>
                <DashboardCreateDialog />
            </DashboardTopContainer>
            <DashboardListRoot>
                <DashboardListContent>
                    {links.map((link) => {
                        return (
                            <LinkCard
                                key={link.id}
                                link={link}
                            />
                        )
                    })}
                </DashboardListContent>
            </DashboardListRoot>
        </DashboardRoot>
    )
}
