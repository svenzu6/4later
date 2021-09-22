import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import firebase from 'firebase'
import Link from 'next/link'
import React from 'react'

import { Collections } from '../../enums/firebaseCollections'
import { LinkCardEditDialog } from '../LinkCardEditDialog'

import {
    LinkCardContent,
    LinkCardDescription,
    LinkCardFavoriteContainer,
    LinkCardIconContainer,
    LinkCardLinkContent,
    LinkCardRoot,
    LinkCardTitle,
    LinkCardUrl,
} from './LinkCard.styles'
import type { LinkCardProps } from './LinkCard.types'
import type { LinkCardDeleteProps } from './LinkCardDelete.types'
import type { LinkCardFavoriteProps } from './LinkCardFavorite.types'

export const LinkCardFavorite: React.FunctionComponent<LinkCardFavoriteProps> = (props) => {
    const { link } = props

    const handleFavorites = () => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .update({
                isFavorite: !link.isFavorite,
            })
    }

    return (
        <IconButton onClick={handleFavorites}>
            {link.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    )
}

export const LinkCardDelete: React.FunctionComponent<LinkCardDeleteProps> = (props) => {
    const { link } = props

    const deleteLink = () => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .delete()
    }

    return (
        <IconButton onClick={deleteLink}>
            <DeleteIcon />
        </IconButton>
    )
}

export const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => {
    const { link } = props

    return (
        <LinkCardRoot>
            <LinkCardFavoriteContainer>
                <LinkCardFavorite link={link} />
            </LinkCardFavoriteContainer>
            <LinkCardContent>
                <Link href={link.url}>
                    <a target="_blank">
                        <LinkCardLinkContent>
                            <LinkCardTitle>
                                {link.title}
                            </LinkCardTitle>
                            <LinkCardDescription>
                                {link.description}
                            </LinkCardDescription>
                            <LinkCardUrl>
                                {link.url}
                            </LinkCardUrl>
                        </LinkCardLinkContent>
                    </a>
                </Link>
            </LinkCardContent>
            <LinkCardIconContainer>
                <LinkCardDelete link={link} />
                <LinkCardEditDialog link={link} />
            </LinkCardIconContainer>
        </LinkCardRoot>
    )
}