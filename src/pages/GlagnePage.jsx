import React from 'react'
import { Block } from '../commons/Block'
import { AppLayout } from '../layouts/AppLayout'
import { NewPostForm } from '../forms/NewPostForm'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { ShowError } from '../commons/ShowError'
import { Spinner } from '../commons/Spinner'
import { ListOfPosts } from '../components/ListOfPosts'
import { reverse } from 'ramda'
import { useNetlifyIdentity } from 'react-netlify-identity'

const GET_POSTS_QUERY = gql`
  query {
    posts {
      id
      createdAt
      content
      author {
        id
        fullName
      }
    }
  }
`

export const GlagnePage = () => {
  const { isLoggedIn } = useNetlifyIdentity(
    process.env.REACT_APP_NETLIFY_IDENTITY_URL
  )

  const { data, error, loading } = useQuery(GET_POSTS_QUERY)

  return (
    <AppLayout>
      <Block name='GlagnePage'>
        {error && <ShowError error={error} />}
        {isLoggedIn && <NewPostForm />}
        {loading && <Spinner />}
        {data.posts && <ListOfPosts posts={reverse(data.posts)} />}
      </Block>
    </AppLayout>
  )
}
