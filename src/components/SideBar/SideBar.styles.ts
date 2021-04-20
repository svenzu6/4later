import {
    createStyles,
    Drawer,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'
import styled from 'styled-components'

export const SideBarRoot = styled.div`
    display: flex;
    flex-direction: row;
`

export const SideBarDrawer = styled(Drawer)`
    flex-shrink: 0;
    width: 240;
`

export const TopBar = styled.div`
    border: 2px solid;
    margin-left: 168px;
    grid-template-rows: 3ch auto minmax(10px, 60px);
`

export const Title = styled(Typography)`
   padding: 10px;
`

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        content: {
            backgroundColor: theme.palette.background.default,
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    }),
)