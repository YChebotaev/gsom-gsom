import React from 'react'
import { Block } from '../commons/Block'
import { Repeater } from '../commons/Repeater'
import { Post } from './Post'

export const ListOfPosts = ({ posts }) => (
  <Block name='ListOfPosts'>
    <Repeater items={posts}>
      {post => <Post post={post} key={post.id} />}
    </Repeater>
  </Block>
)
