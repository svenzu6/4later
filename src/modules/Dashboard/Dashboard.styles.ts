import { TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

export const TopBar = styled.div`
    margin-left: 168px;
    grid-template-rows: 3ch auto minmax(10px, 60px);
`

export const StyledDialogContent = styled.div`
    padding: 10px;
`

export const StyledTextField = styled(TextField)`
    margin: 100px 0;
`

export const DialogForm = styled.form`
    display: grid;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`

export const FormTitle = styled(Typography)`
    align-self: center;
    padding-top: 10px ;
`