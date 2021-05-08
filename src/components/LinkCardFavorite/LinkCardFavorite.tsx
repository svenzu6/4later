import { IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import firebase from 'firebase'
import { useToggle } from 'react-use'

import { Collections } from '../../enums/firebaseCollections'

import type { LinkCardFavoriteProps } from './LinkCardFavorite.types'

export const LinkCardFavorite: React.FunctionComponent<LinkCardFavoriteProps> = (props) => {
    const { link } = props

    const [isFavorite, toggleIsFavorite] = useToggle(false)

    const handleFav = () => {
        toggleIsFavorite()

        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .update({
                favorite: isFavorite,
            })
    }

    return (
        <IconButton onClick={handleFav}>
            {link.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    )
}