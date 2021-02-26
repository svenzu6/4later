import React from 'react'
import styled from 'styled-components'

export const RegisterRoot = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const RegisterForm = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    padding:50px;
`

export const Field = styled.input`
    width: 100%;
    padding: 15px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`

export const Button = styled.div`
    cursor:pointer;
    padding: 0.5em;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`
