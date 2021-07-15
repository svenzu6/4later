import firebase from 'firebase'
import React from 'react'

import { Collections } from '../../enums/firebaseCollections'

import type { UserType } from './useCurrentUser.types'

export const useCurrentUser = () => {
    const firebaseUser = firebase.auth().currentUser

    const [user, setUser] = React.useState<UserType>({
        email: '',
        id: '',
        username: '',
    })

    React.useEffect(() => {
        const currentUser = localStorage.getItem('user')

        if (currentUser) {
            setUser(JSON.parse(currentUser))
        } else {
            void firebase
                .firestore()
                .collection(Collections.USERS)
                .doc(firebaseUser?.uid)
                .onSnapshot((result) => {
                    const fetchedUser = result.data() as UserType | null

                    if (!fetchedUser) {
                        return
                    }

                    localStorage.setItem('user', JSON.stringify(fetchedUser))

                    setUser(fetchedUser)
                })
        }
    }, [firebaseUser])

    return user
}