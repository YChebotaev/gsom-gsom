import React from 'react'
import './styles/AuthLayout.scss'
import { Container } from 'reactstrap'
import { Block } from '../commons/Block'
import { Element } from '../commons/Element'

export const AuthLayout = ({ children }) => (
  <Block name='AuthLayout'>
    <Element name='content'>
      <Container>{children}</Container>
    </Element>
  </Block>
)
