import {
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
    SideBarDrawer,
    SideBarRoot,
    SideBarTitle,
} from './SideBar.styles'

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

export const SideBar: React.FunctionComponent = (props) => {
    const router = useRouter()

    return (
        <SideBarRoot>
            <SideBarDrawer
                anchor="left"
                variant="permanent"
            >
                <SideBarTitle variant="h5">
                    4Later
                </SideBarTitle>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button={true}
                            key={item.text}
                            onClick={() => void router.push(item.path)}
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
                        onClick={() => void firebase
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
            </SideBarDrawer>
            <main style={{ marginLeft: '300px' }}>
                {props.children}
            </main>
        </SideBarRoot>
    )
}
