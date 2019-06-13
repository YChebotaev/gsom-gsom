import React from 'react'
import { Block } from '../commons/Block'
import { AuthLayout } from '../layouts/AuthLayout'
import { ConfirmForm } from '../forms/ConfirmForm'

export const ConfirmPage = () => {
  return (
    <AuthLayout>
      <Block name='ConfirmPage'>
        <ConfirmForm />
      </Block>
    </AuthLayout>
  )
}
