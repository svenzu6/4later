import {
    DialogActions,
    DialogContent,
    TextField,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import { LinkFormForm } from './LinkForm.styles'
import type {
    LinkFormProps,
    LinkFormType,
} from './LinkFrom.types'

const ValidationSchema = Yup.object().shape({
    description: Yup.string(),
    title: Yup.string()
        .required('Required'),
    url: Yup.string()
        .url('Must be a link')
        .required('Required'),
})

export const LinkForm: React.FunctionComponent<LinkFormProps> = (props) => {
    const {
        actions,
        onSubmit,
        value: initialValues,
    } = props

    const {
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        values,
    } = useFormik<LinkFormType>({
        enableReinitialize: true,
        initialValues: {
            description: initialValues?.description ?? '',
            title: initialValues?.title ?? '',
            url: initialValues?.url ?? '',
        },
        onSubmit: (formValues) => {
            onSubmit(formValues)
            resetForm({})
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    return (
        <DialogContent>
            <LinkFormForm onSubmit={handleSubmit}>
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
                    {actions}
                </DialogActions>
            </LinkFormForm>
        </DialogContent>
    )
}