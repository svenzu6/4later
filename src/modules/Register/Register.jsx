import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import {
    Button,
    Field,
    Form,
    RegisterRoot,
    RegisterTitle,
} from './Register.styles'

export const Register = () => {
    const { errors, handleSubmit, register, watch } = useForm()
    // eslint-disable-next-line no-console
    const onSubmit = (data) => console.log(data)

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
                    name="password2"
                    placeholder="confirm your password..."
                    ref={register}
                    type="password"
                />

                <Button
                    name="submitbtn"
                    type="submit"
                />
            </Form>
        </RegisterRoot>
    )
}
