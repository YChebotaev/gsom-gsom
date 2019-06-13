import React, { useState } from 'react'
import './styles/ConfirmForm.scss'
import { compose } from 'recompose'
import { Block } from '../commons/Block'
import { FormControls } from '../commons/FormControls'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNetlifyIdentity } from 'react-netlify-identity'
import { withRouter } from 'react-router'
import { ShowError } from '../commons/ShowError'
import { Spinner } from '../commons/Spinner'

const enhance = compose(withRouter)

export const ConfirmForm = enhance(({ history, match }) => {
  const { _goTrueInstance, setUser } = useNetlifyIdentity(
    process.env.REACT_APP_NETLIFY_IDENTITY_URL
  )
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const confirmUser = async (password, remember) => {
    try {
      const { token } = match.params
      _goTrueInstance._setRememberHeaders(remember)
      const response = await _goTrueInstance._request('/verify', {
        method: 'POST',
        body: JSON.stringify({
          token,
          password,
          type: 'signup'
        })
      })
      const user = await _goTrueInstance.createUser(response, remember)
      setUser(user)
      return user
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onRegister = async e => {
    e.preventDefault()
    try {
      setError()
      setLoading(true)
      await confirmUser(password, true)
      history.push('/login')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Block name='LoginForm'>
      <h1>Регистрация</h1>
      {error && <ShowError error={error} />}
      {loading && <Spinner />}
      <Form>
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
          <Button color='primary' onClick={onRegister}>
            Зарегистрироваться
          </Button>
        </FormControls>
      </Form>
    </Block>
  )
})
