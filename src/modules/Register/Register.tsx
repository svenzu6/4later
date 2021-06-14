import {
    Button,
    TextField,
    Typography,
} from '@material-ui/core'
import firebase from 'firebase/app'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import * as Yup from 'yup'

import { Collections } from '../../enums/firebaseCollections'
import { FirebaseErrors } from '../../enums/firebaseErrors'

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
    const router = useRouter()

    const {
        errors,
        handleChange,
        handleSubmit,
        setErrors,
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
                .then((result) => {
                    void firebase
                        .firestore()
                        .collection(Collections.USERS)
                        .doc(result.user?.uid)
                        .set({
                            email: formValues.email,
                            id: result.user?.uid,
                            username: formValues.username,
                        })
                })
                .then(() => {
                    void router.push('/dashboard')
                })
                .catch((error: firebase.FirebaseError) => {
                    if (error.code === FirebaseErrors.USER_EXISTS){
                        setErrors({ email: error.message })
                    }
                })
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    return (
        <RegisterRoot>
            <RegisterContent elevation={3}>
                <Typography variant="h3">
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
                        type="password"
                        value={values.password}
                        variant="outlined"
                    />
                    <TextField
                        error={Boolean(errors.passwordConfirmation)}
                        helperText={errors.passwordConfirmation}
                        label="Repeat Password"
                        name="passwordConfirmation"
                        onChange={handleChange}
                        type="password"
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
