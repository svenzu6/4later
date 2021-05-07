import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import firebase from 'firebase'
import Link from 'next/link'
import React from 'react'
import { useToggle } from 'react-use'

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
} from './LinkCard.styles'
import type { LinkCardProps } from './LinkCard.types'

export const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => {
    const { link } = props
    const [isFavorite, toggleIsFavorite] = useToggle(false)

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
                <IconButton onClick={toggleIsFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
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
                    </LinkCardLinkContent>
                </Link>
                <LinkCardIconContainer>
                    <IconButton onClick={deleteLink}>
                        <DeleteIcon />
                    </IconButton>
                    <LinkCardEditDialog link={link} />
                </LinkCardIconContainer>
            </LinkCardContent>
        </LinkCardRoot>
    )
}