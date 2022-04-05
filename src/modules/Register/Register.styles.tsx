import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const RegisterRoot = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('icons/floppy.jpg');
    background-position: center;
    background-repeat: no-repeat;
`

export const RegisterContent = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const RegisterForm = styled.form`
    display: grid;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`
