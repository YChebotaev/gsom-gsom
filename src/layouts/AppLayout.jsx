import React from 'react'
import './styles/AppLayout.scss'
import { Container } from 'reactstrap'
import { Block } from '../commons/Block'
import { Element } from '../commons/Element'
import { TopNav } from '../components/TopNav'
import { Footer } from '../components/Footer'

export const AppLayout = ({ children }) => (
  <Block name='AppLayout'>
    <Element name='header'>
      <TopNav />
    </Element>
    <Element name='content'>
      <Container>{children}</Container>
    </Element>
    <Element name='footer'>
      <Footer />
    </Element>
  </Block>
)
