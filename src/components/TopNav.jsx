import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import { Block } from '../commons/Block'
import { Link } from 'react-router-dom'

export const TopNav = () => (
  <Block name='TopNav'>
    <Navbar color='light' light expand='md'>
      <Container>
        <NavbarBrand tag={Link} to='/'>
          Пыщь-Пыщь
        </NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink tag={Link} to='/'>
              Глагнэ
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  </Block>
)
