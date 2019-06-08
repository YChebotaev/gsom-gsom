import React from 'react'
import { Block } from './Block'
import { Element } from './Element'
import { Alert } from 'reactstrap'

export const ShowError = ({ error }) => (
  <Block name='ShowError'>
    <Alert color='danger'>
      <Element name='message'>{error.message}</Element>
      <Element name='stack'>{error.stack}</Element>
    </Alert>
  </Block>
)
