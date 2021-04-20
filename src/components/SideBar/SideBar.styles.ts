import {
    Drawer,
    Typography,
} from '@material-ui/core'
import styled from 'styled-components'

export const SideBarRoot = styled.div`
    display: flex;
    flex-direction: row;
`

export const SideBarDrawer = styled(Drawer)`
    flex-shrink: 0;
    width: 240;
`

export const SideBarTitle = styled(Typography)`
   padding: 10px;
`