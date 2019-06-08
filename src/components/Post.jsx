import React from 'react'
import './styles/Post.scss'
import { Block } from '../commons/Block'
import { Element } from '../commons/Element'
import { PostAuthor } from './PostAuthor'
import ReactMarkdown from 'react-markdown'

export const Post = ({ post }) => (
  <Block name='Post' id={post.id}>
    <Element name='content'>
      <ReactMarkdown source={post.content} />
    </Element>
    <PostAuthor createdAt={post.createdAt} author={post.author} />
  </Block>
)
