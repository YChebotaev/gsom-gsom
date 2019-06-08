import React, { useState } from 'react'
import './styles/NewPostForm.scss'
import { Button } from 'reactstrap'
import { Editor } from '../components/Editor'
import { Block } from '../commons/Block'
import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const ADD_POST_MUTATION = gql`
  mutation($content: String, $authorId: ID) {
    createPost(
      data: {
        status: PUBLISHED
        content: $content
        author: { connect: { id: $authorId } }
      }
    ) {
      id
      status
      content
      createdAt
      author {
        id
        fullName
      }
    }
  }
`

export const NewPostForm = () => {
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState()
  const addPost = useMutation(ADD_POST_MUTATION, {
    variables: {
      content,
      authorId: 'cjwmz47v70b1z0989f7f320uu'
    }
  })

  const handleYarr = async e => {
    e.preventDefault()
    setSaving(true)
    try {
      const { data } = await addPost()
      window.location.reload()
    } catch (error) {
      setError(error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Block name='NewPostForm'>
      <Editor onChange={setContent} disabled={saving} />
      <Button
        disabled={!content.trim() && saving}
        color='primary'
        onClick={handleYarr}
      >
        Yarrrrrrr!
      </Button>
    </Block>
  )
}
