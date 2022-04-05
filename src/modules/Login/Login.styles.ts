import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const LoginRoot = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginContent = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-image: url('icons/floppy.jpg');
    background-position: start;
    background-size: cover;
    position: absolute;
`

export const LoginForm = styled.form`
    display: grid;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`
