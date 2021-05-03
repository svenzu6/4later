import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import firebase from 'firebase'
import Link from 'next/link'
import React from 'react'

import { Collections } from '../../enums/firebaseCollections'

import {
    LinkCardContent,
    LinkCardRoot,
    LinkCardTitle,
    LinkCardTop,

} from './LinkCard.styles'
import type { LinkCardProps } from './LinkCard.types'

export const LinkCard = (props: LinkCardProps) => {
    const { link } = props

    const deleteLink = (() => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .delete()
    })

    return (
        <LinkCardRoot>
            <LinkCardContent>
                <div key={link.id}>
                    <LinkCardTop>
                        <Button onClick={deleteLink}>
                            <DeleteIcon />
                        </Button>
                    </LinkCardTop>
                    <LinkCardTitle>
                        {link.title}
                    </LinkCardTitle>
                    <Link href={link.url}>
                        <a>
                            {link.url}
                        </a>
                    </Link>
                    <p>
                        {link.description}
                    </p>
                </div>
            </LinkCardContent>
        </LinkCardRoot>
    )
}