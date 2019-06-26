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
import { useNetlifyIdentity } from 'react-netlify-identity'

export const TopNav = () => {
  const { isLoggedIn } = useNetlifyIdentity(
    process.env.REACT_APP_NETLIFY_IDENTITY_URL,
    function() {},
    false
  )

  return (
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
            {!isLoggedIn && (
              <NavItem>
                <NavLink tag={Link} to='/login'>
                  Вход
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Block>
  )
}
