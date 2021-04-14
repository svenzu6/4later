import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Toolbar,
    Typography,
} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FavoriteIcon from '@material-ui/icons/Favorite'
import React from 'react'

import { useStyles } from './Dashboard.styles'

export const Dashboard: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                className={classes.appBar}
                color="transparent"
                position="fixed"
            >
                <Toolbar>
                    <Typography
                        noWrap={true}
                        variant="h6"
                    >
                        4later dashboard
                    </Typography>
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
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['Dashboard', 'Favourites'].map((text, index) => (
                        <ListItem
                            button={true}
                            key={text}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <DashboardIcon /> : <FavoriteIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph={true}>
                    PARAGRAPH
                </Typography>
                <Typography paragraph={true}>
                    Paragraph
                </Typography>
            </main>
        </div>
    )
}