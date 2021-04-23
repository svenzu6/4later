import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@material-ui/core'
import cuid from 'cuid'
import firebase from 'firebase'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { useToggle } from 'react-use'
import * as Yup from 'yup'

import { Collections } from '../../../enums/firebaseCollections'

import { DashboardCreateDialogForm } from './DashboardCreateDialog.styles'
import type { DashboardCreateDialogType } from './DashboardCreateDialog.types'

const DialogSchema = Yup.object().shape({
    description: Yup.string(),
    title: Yup.string()
        .required('Required'),
    url: Yup.string()
        .url('Must be a link')
        .required('Required'),
})

export const DashboardCreateDialog: React.FunctionComponent = () => {
    const [isOpen, toggleOpen] = useToggle(false)

    const router = useRouter()
    const user = firebase.auth().currentUser
    const {
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        values,
    } = useFormik<DashboardCreateDialogType>({
        initialValues: {
            description: '',
            title: '',
            url: '',
        },
        onSubmit: (formValues) => {
            const id = cuid()

            void firebase
                .firestore()
                .collection(Collections.LINKS)
                .doc(id)
                .set({
                    description: formValues.description,
                    id: id,
                    title: formValues.title,
                    url: formValues.url,
                    userId: user.uid,
                })
                .then(() => {
                    toggleOpen()
                    resetForm()
                })
        },
        validateOnChange: false,
        validationSchema: DialogSchema,
    })

    const handleCancel = () => {
        toggleOpen()
        resetForm()
    }

    return (
        <>
            <Button
                color="secondary"
                onClick={toggleOpen}
                variant="outlined"
            >
                Add a new link
            </Button>
            <Dialog
                onClose={toggleOpen}
                open={isOpen}
            >
                <DialogTitle>
                    Add a Link
                </DialogTitle>
                <DialogContent>
                    <DashboardCreateDialogForm
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            color="secondary"
                            error={Boolean(errors.url)}
                            fullWidth={true}
                            helperText={errors.url}
                            label="URL"
                            name="url"
                            onChange={handleChange}
                            required={true}
                            value={values.url}
                            variant="outlined"
                        />
                        <TextField
                            color="secondary"
                            error={Boolean(errors.title)}
                            fullWidth={true}
                            helperText={errors.title}
                            label="Link Title"
                            name="title"
                            onChange={handleChange}
                            required={true}
                            value={values.title}
                            variant="outlined"
                        />
                        <TextField
                            color="secondary"
                            fullWidth={true}
                            label="Description"
                            multiline={true}
                            name="description"
                            onChange={handleChange}
                            rows={4}
                            value={values.description}
                            variant="outlined"
                        />
                        <DialogActions>
                            <Button
                                color="secondary"
                                onClick={handleCancel}
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
                        </DialogActions>
                    </DashboardCreateDialogForm>
                </DialogContent>
            </Dialog>
        </>
    )
}
