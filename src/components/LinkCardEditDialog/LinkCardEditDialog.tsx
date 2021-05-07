import {
    Button,
    Dialog,
    DialogTitle,
    IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import firebase from 'firebase'
import React from 'react'
import { useToggle } from 'react-use'

import { Collections } from '../../enums/firebaseCollections'
import type { LinkFormType } from '../LinkForm'
import { LinkForm } from '../LinkForm'

import type { LinkCardEditDialogProps } from './LinkCardEditDialog.types'

export const LinkCardEditDialog: React.FunctionComponent<LinkCardEditDialogProps> = (props) => {
    const { link } = props

    const [isOpen, toggleOpen] = useToggle(false)

    const handleEdit = (formValues: LinkFormType) => {
        void firebase
            .firestore()
            .collection(Collections.LINKS)
            .doc(link.id)
            .update({
                description: formValues.description,
                title: formValues.title,
                url: formValues.url,
            })
            .then(() => {
                toggleOpen()
            })
    }

    return (
        <>
            <IconButton onClick={toggleOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={isOpen}>
                <DialogTitle>
                    Edit Link
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
                                Edit
                            </Button>
                        </>
                    )}
                    onCancel={toggleOpen}
                    onSubmit={handleEdit}
                    value={link}
                />
            </Dialog>
        </>
    )
}