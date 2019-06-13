import React from 'react'
import './styles/LoginForm.scss'
import { Block } from '../commons/Block'
import { FormControls } from '../commons/FormControls'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const LoginForm = () => {
  const onEnter = e => {
    e.preventDefault()
  }

  return (
    <Block name='LoginForm'>
      <h1>Вход</h1>
      <Form>
        <FormGroup>
          <Label for='email'>Емейл</Label>
          <Input type='email' name='email' placeholder='vasya@pupkin.ru' />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Пароль</Label>
          <Input type='password' name='password' />
        </FormGroup>
        <FormControls>
          <Button color='primary' onClick={onEnter}>
            Войти
          </Button>
        </FormControls>
      </Form>
    </Block>
  )
}
