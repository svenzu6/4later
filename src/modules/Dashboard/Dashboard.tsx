import firebase from 'firebase'
import React from 'react'

import { Collections } from '../../enums/firebaseCollections'
import { useCurrentUser } from '../../lib/useCurrentUser'

import {
    DashboardListRoot,
    DashboardRoot,
} from './Dashboard.styles'
import type { LinkType } from './Dashboard.types'
import { DashboardCreateDialog } from './DashboardCreateDialog'

export const Dashboard: React.FunctionComponent = () => {
    const user = useCurrentUser()

    const [links, setLinks] = React.useState<LinkType[]>([])

    console.log(user)

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
        <DashboardRoot>
            <h1>
                DASHBOARD
            </h1>
            <DashboardCreateDialog />
            <DashboardListRoot>
                {links.map((link) => {
                    return (
                        <h1 key={link.id}>
                            {link.title}
                        </h1>
                    )
                })}
            </DashboardListRoot>
        </DashboardRoot>
    )
}
