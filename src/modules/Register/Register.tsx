import {
    Button,
    TextField,
    Typography,
} from '@material-ui/core'
import cuid from 'cuid'
import firebase from 'firebase'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import {
    RegisterContent,
    RegisterForm,
    RegisterRoot,
} from './Register.styles'
import type { RegisterFormType } from './Register.types'

const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Required'),
    password: Yup.string()
        .min(7, 'Must be at least 7 charaters')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    username: Yup.string()
        .required('Required'),
})

export const Register: React.FunctionComponent = () => {
    const {
        errors,
        handleChange,
        handleSubmit,
        values,
    } = useFormik<RegisterFormType>({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            username: '',
        },
        onSubmit: (formValues) => {
            void firebase
                .auth()
                .createUserWithEmailAndPassword(formValues.email, formValues.password)
                .then(() => {
                    const id = cuid()

                    void firebase
                        .firestore()
                        .collection('users')
                        .doc(id)
                        .set({
                            id: id,
                            username: formValues.username,
                        })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    return (
        <RegisterRoot>
            <RegisterContent elevation={3}>
                <Typography
                    variant="h3"
                >
                    Sign up
                </Typography>
                <RegisterForm onSubmit={handleSubmit}>
                    <TextField
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        label="E-mail"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        variant="outlined"
                    />
                    <TextField
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        variant="outlined"
                    />
                    <TextField
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        variant="outlined"
                    />
                    <TextField
                        error={Boolean(errors.passwordConfirmation)}
                        helperText={errors.passwordConfirmation}
                        label="Repeat Password"
                        name="passwordConfirmation"
                        onChange={handleChange}
                        value={values.passwordConfirmation}
                        variant="outlined"
                    />
                    <Button
                        color="primary"
                        type="submit"
                        variant="outlined"
                    >
                        Create
                    </Button>
                </RegisterForm>
            </RegisterContent>
        </RegisterRoot>
    )
}
