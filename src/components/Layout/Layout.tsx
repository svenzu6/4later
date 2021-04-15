import {
    AppBar,
    Button,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Toolbar,
    Typography,
} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'

import { useStyles } from './Layout.styles'

export const Layout: React.FunctionComponent = (props) => {
    const classes = useStyles()
    const router = useRouter()
    const menuItems = [
        {
            icon: <AddIcon />,
            path: '/add-a-link',
            text: 'Add a link',
        },

        {
            icon: <FavoriteIcon />,
            path: '/my-links',
            text: 'My Links',
        },

        {
            icon: <StarIcon />,
            path: '/favorites',
            text: 'favorites',
        },

    ]

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                className={classes.appBar}
                color="transparent"
                elevation={0}
                position="fixed"
            >
                <Toolbar>
                    <Typography
                        className={classes.date}
                    >
                        {format(new Date(), 'dd/MM/yyyy')}
                    </Typography>
                    <Button
                        className={classes.logout}
                        color="inherit"
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
            >
                <div>
                    <Typography
                        className={classes.title}
                        variant="h5"
                    >
                        4Later
                    </Typography>
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
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar} />
                {props.children}
            </div>
        </div>
    )
}