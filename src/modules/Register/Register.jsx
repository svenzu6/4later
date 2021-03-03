import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components' //fixme: remove unused imports

import {
    Button,
    Field,
    Form,
    RegisterRoot,
    RegisterTitle,
} from './Register.styles'

export const Register = () => {
    const { errors, handleSubmit, register, watch } = useForm() // fixme: remove unused variables

    const onSubmit = (data) => {
        // eslint-disable-next-line no-console
        console.log(data)
    }

    // FIXME: WRITE CLEANER PLACEHOLDERS
    return (
        <RegisterRoot>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <RegisterTitle>
                    4Later
                </RegisterTitle>
                <Field
                    name="username"
                    placeholder="create username..."
                    ref={register}
                    type="username"
                />
                <Field
                    name="email"
                    placeholder="your email..."
                    ref={register}
                    type="email"
                />
                <Field
                    name="password"
                    placeholder="your password..."
                    ref={register}
                    type="password"
                />
                <Field
                    name="password2" // fixme: usually called repeatPassword / passwordConfirmation
                    placeholder="confirm your password..."
                    ref={register}
                    type="password"
                />

                <Button
                    name="submitbtn" // fixme: you prob dont need name here
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </RegisterRoot>
    )
}
