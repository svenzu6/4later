import {
    Button,
    TextField,
    Typography,
} from '@material-ui/core'

import {
    LoginContent,
    LoginForm,
    LoginRoot,
} from './Login.styles'

export const Login: React.FunctionComponent = () => {
    return (
        <LoginRoot>
            <LoginContent elevation={3}>
                <Typography
                    variant="h3"
                >
                    Log in
                </Typography>
                <br />
                <LoginForm>
                    <TextField
                        label="E-mail"
                        name="email"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        name="password"
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
            </LoginContent>
        </LoginRoot>
    )
}
