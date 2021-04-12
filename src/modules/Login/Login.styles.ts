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
`

export const LoginForm = styled.form`
    display: grid;
    row-gap: 5px;
    justify-content: center;
    align-items: center;
`
