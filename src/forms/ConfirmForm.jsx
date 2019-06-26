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
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'

const ADD_AUTHOR_MUTATION = gql`
  mutation(
    $email: String
    $fullName: String
    $confirmedAt: DateTime
    $invitedAt: DateTime
  ) {
    createAuthor(
      data: {
        email: $email
        fullName: $fullName
        confirmedAt: $confirmedAt
        invitedAt: $invitedAt
        status: PUBLISHED
      }
    ) {
      id
    }
  }
`

const enhance = compose(withRouter)

export const ConfirmForm = enhance(({ history, match }) => {
  const { _goTrueInstance, setUser } = useNetlifyIdentity(
    process.env.REACT_APP_NETLIFY_IDENTITY_URL,
    function () {},
    false
  )
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const addAuthor = useMutation(ADD_AUTHOR_MUTATION)

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
      addAuthor({
        variables: {
          email: user.email,
          fullName: nickname,
          confirmedAt: new Date(user.confirmed_at),
          invitedAt: new Date(user.invited_at),
          status: 'PUBLISHED'
        }
      })
      return user
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
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
          <Label for='nickname'>Никнейм</Label>
          <Input
            type='text'
            name='nickname'
            value={nickname}
            onChange={onChangeNickname}
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
          <Button color='primary' onClick={onRegister}>
            Зарегистрироваться
          </Button>
        </FormControls>
      </Form>
    </Block>
  )
})
