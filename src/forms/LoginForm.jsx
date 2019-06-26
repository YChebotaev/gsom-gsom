import React, { useState } from 'react'
import './styles/LoginForm.scss'
import { compose } from 'recompose'
import { Block } from '../commons/Block'
import { FormControls } from '../commons/FormControls'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNetlifyIdentity } from 'react-netlify-identity'
import { withRouter } from 'react-router'
import { ShowError } from '../commons/ShowError'
import { Spinner } from '../commons/Spinner'

const enhance = compose(withRouter)

export const LoginForm = enhance(({ history }) => {
  const { _goTrueInstance, setUser } = useNetlifyIdentity(
    process.env.REACT_APP_NETLIFY_IDENTITY_URL,
    function() {},
    false
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const loginUser = async (email, password, remember) => {
    const user = _goTrueInstance.login(email, password, remember)
    setUser(user)
    return user
  }

  const onEnter = async e => {
    e.preventDefault()
    try {
      setError()
      setLoading(true)
      await loginUser(email, password, true)
      history.push('/')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Block name='LoginForm'>
      <h1>Вход</h1>
      {error && <ShowError error={error} />}
      {loading && <Spinner />}
      <Form>
        <FormGroup>
          <Label for='email'>Емейл</Label>
          <Input
            type='email'
            name='email'
            placeholder='vasya@pupkin.ru'
            value={email}
            onChange={onChangeEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Пароль</Label>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <FormControls>
          <Button color='primary' onClick={onEnter}>
            Войти
          </Button>
        </FormControls>
      </Form>
    </Block>
  )
})
