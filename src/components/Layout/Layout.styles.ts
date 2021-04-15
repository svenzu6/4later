import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

export const useStyles = makeStyles((theme) => {
    return {

        appBar: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },

        date: {
            flexGrow: 1,
        },

        drawer: {
            flexShrink: 0,
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },

        logout: {
            marginLeft: theme.spacing(2),
        },
        page: {
            background: '$f9f9f9',
            padding: theme.spacing(3),
            width: '100%',
        },

        root: {
            display: 'flex',
        },

        title: {
            padding: theme.spacing(2),
        },

        toolbar: theme.mixins.toolbar,
    }
})
