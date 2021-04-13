import {
    Button,
    TextField,
    Typography,
} from '@material-ui/core'
import firebase from 'firebase/app'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import {
    LoginContent,
    LoginForm,
    LoginRoot,
} from './Login.styles'
import type { LoginFormType } from './Login.types'

const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Required'),
    password: Yup.string()
        .min(7, 'Must be at least 7 charaters')
        .required('Required'),
})

export const Login: React.FunctionComponent = () => {
    const router = useRouter()

    const {
        errors,
        handleChange,
        handleSubmit,
        values,
    } = useFormik<LoginFormType>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (formValues) => {
            void firebase
                .auth()
                .signInWithEmailAndPassword(formValues.email, formValues.password)
                .then(() => {
                    void router.push('/dashboard')
                })
        },
        validateOnChange: false,
        validationSchema: ValidationSchema,
    })

    return (
        <LoginRoot>
            <LoginContent elevation={3}>
                <Typography
                    variant="h3"
                >
                    Log in
                </Typography>
                <LoginForm onSubmit={handleSubmit}>
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
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined"
                    />
                    <Button
                        color="primary"
                        type="submit"
                        variant="outlined"
                    >
                        Login
                    </Button>
                </LoginForm>
                <Typography>
                    No account?
                </Typography>
                <Link href="/register">
                    <Button
                        color="primary"
                        type="submit"
                    >
                        Sign up here
                    </Button>
                </Link>
            </LoginContent>
        </LoginRoot>
    )
}
