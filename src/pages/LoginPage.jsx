import React from 'react'
import { Block } from '../commons/Block'
import { AuthLayout } from '../layouts/AuthLayout'
import { LoginForm } from '../forms/LoginForm'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Block name='LoginPage'>
        <LoginForm />
      </Block>
    </AuthLayout>
  )
}
