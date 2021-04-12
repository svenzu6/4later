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
                <Typography
                    variant="h3"
                >
                    Welcome, get started!
                </Typography>
                <ButtonGroup
                    aria-label="text primary button group"
                    color="primary"
                    variant="text"
                >

                    <Link href="/register">
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