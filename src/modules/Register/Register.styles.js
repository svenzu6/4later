import React from 'react'
import styled from 'styled-components'

export const RegisterRoot = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:papayawhip;
`

export const Form = styled.form`
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    padding:50px;
    border-radius:3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Field = styled.input`
    width: 100%;
    padding: 15px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`

export const Button = styled.input`
    cursor:pointer;
    padding: 0.5em;
    background: gray;
    border: none;
    border-radius: 3px;
    color:papayawhip;
    
`
export const RegisterTitle = styled.h1`
color:papayawhip;
text-decoration-line:overline;
`