import {
    Button,
    TextField,
    Typography,
} from '@material-ui/core'
import React from 'react'

import {
    RegisterContent,
    RegisterForm,
    RegisterRoot,
} from './Register.styles'

export const Register: React.FunctionComponent = () => {
    return (
        <RegisterRoot>
            <RegisterContent elevation={3}>
                <Typography
                    variant="h3"
                >
                    Sign up
                </Typography>
                <RegisterForm>
                    <TextField
                        label="E-mail"
                        name="email"
                        variant="outlined"
                    />
                    <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        variant="outlined"
                    />
                    <Button
                        color="primary"
                        variant="outlined"
                    >
                        Create
                    </Button>
                </RegisterForm>
            </RegisterContent>
        </RegisterRoot>
    )
}
