import { IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import firebase from 'firebase'

import { Collections } from '../../enums/firebaseCollections'

import type { LinkCardFavoriteProps } from './LinkCardFavorite.types'

export const LinkCardFavorite: React.FunctionComponent<LinkCardFavoriteProps> = (props) => {
    const { link } = props

    const handleFav = () => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .update({
                isFavorite: !link.isFavorite,
            })
    }

    return (
        <IconButton onClick={handleFav}>
            {link.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    )
}