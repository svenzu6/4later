import React from 'react'
import styled from 'styled-components'

import {
    Button,
    Field,
    RegisterForm,
    RegisterRoot,
} from './Register.styles'

export const Register = () => {
    return (
        <RegisterRoot>
            <RegisterForm>

                <Field placeholder="your email..." />
                <Field placeholder="your password..." />
                <Field placeholder="confirm your password..." />

                <Button>
                    Sign Up
                </Button>
            </RegisterForm>
        </RegisterRoot>
    )
}
