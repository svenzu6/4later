import {
    Button,
    ButtonGroup,
    Typography,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

import {
    HomeContent,
    HomeRoot,
} from './Home.styles'

export const Home: React.FunctionComponent = () => {
    return (
        <HomeRoot>
            <HomeContent>
                <Typography variant="h4">
                    Save your links
                </Typography>
                <Typography variant="h2">
                    4later
                </Typography>
                <ButtonGroup
                    color="primary"
                    variant="text"
                >
                    <Link href="/login">
                        <Button>
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button>
                            Sign Up
                        </Button>
                    </Link>
                </ButtonGroup>
            </HomeContent>
        </HomeRoot>
    )
}
