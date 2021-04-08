import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const RegisterRoot = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    row-gap: 5px;
    justify-content: center;
    align-items: center;
`
