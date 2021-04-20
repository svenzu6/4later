import {
    CssBaseline,
    List,
    ListItem,
    ListItemIcon,
} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone'
import StarIcon from '@material-ui/icons/Star'
import firebase from 'firebase'
import { useRouter } from 'next/router'
import React from 'react'

import {
    Root,
    StyledDrawer,
    Title,
    useStyles,
} from './SideBar.styles'

export const SideBar: React.FunctionComponent = (props) => {
    const router = useRouter()
    const classes = useStyles()
    const menuItems = [
        {
            icon: <AddIcon />,
            path: '/dashboard',
            text: 'Dashboard',
        },

        {
            icon: <StarIcon />,
            path: '/favorites',
            text: 'favorites',
        },

    ]

    return (
        <Root>
            <CssBaseline />
            <StyledDrawer
                anchor="left"
                variant="permanent"
            >
                <div>
                    <Title variant="h5">
                        4Later
                    </Title>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button={true}
                            key={item.text}
                            onClick={async () => router.push(item.path)}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListItem
                        button={true}
                        onClick={async () => firebase
                            .auth()
                            .signOut()
                            .then(() => {
                                void router.push('/')
                            })}
                    >
                        <ListItemIcon>
                            <ExitToAppTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>

                </List>
            </StyledDrawer>
            <main className={classes.content}>
                {props.children}
            </main>
        </Root>
    )
}
