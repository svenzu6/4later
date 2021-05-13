import {
    Button,
    Dialog,
    DialogTitle,
} from '@material-ui/core'
import cuid from 'cuid'
import firebase from 'firebase'
import React from 'react'
import { useToggle } from 'react-use'

import type { LinkFormType } from '../../../components/LinkForm'
import { LinkForm } from '../../../components/LinkForm'
import { Collections } from '../../../enums/firebaseCollections'
import { useCurrentUser } from '../../../lib/useCurrentUser'

export const DashboardCreateDialog: React.FunctionComponent = () => {
    const [isOpen, toggleOpen] = useToggle(false)

    const user = useCurrentUser()

    const handleSubmit = (formValues: LinkFormType) => {
        const id = cuid()

        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(id)
            .set({
                description: formValues.description,
                id: id,
                isFavorite: false,
                title: formValues.title,
                url: formValues.url,
                userId: user.id,
            })
            .then(() => {
                toggleOpen()
            })
    }

    return (
        <>
            <Button
                color="secondary"
                onClick={toggleOpen}
                variant="outlined"
            >
                Save a link
            </Button>
            <Dialog
                onClose={toggleOpen}
                open={isOpen}
            >
                <DialogTitle>
                    Add a Link
                </DialogTitle>
                <LinkForm
                    actions={(
                        <>
                            <Button
                                color="secondary"
                                onClick={toggleOpen}
                            >
                                Cancel
                            </Button>
                            <Button
                                color="secondary"
                                type="submit"
                                variant="contained"
                            >
                                Add
                            </Button>
                        </>
                    )}
                    onCancel={toggleOpen}
                    onSubmit={handleSubmit}
                />
            </Dialog>
        </>
    )
}
