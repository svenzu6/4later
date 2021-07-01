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

export const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => {
    const { link } = props

    const deleteLink = () => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .delete()
    }

    return (
        <LinkCardRoot>
            <LinkCardFavoriteContainer>
                <LinkCardFavorite link={link} />
            </LinkCardFavoriteContainer>
            <LinkCardContent>
                <Link href={link.url}>
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
                </Link>
            </LinkCardContent>

            <LinkCardIconContainer>
                <IconButton onClick={deleteLink}>
                    <DeleteIcon />
                </IconButton>
                <LinkCardEditDialog link={link} />
            </LinkCardIconContainer>
        </LinkCardRoot>
    )
}