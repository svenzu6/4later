import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

export const useStyles = makeStyles((theme) => ({
    appBar: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },

    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
}))