import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import CartSummary from './CartSummary'
import { Link } from 'react-router-dom'

export default class Navi extends Component {
  render () {
    return (
      <div>
        <Navbar color='light' expand='md' light>
          <NavbarBrand href='/'>Northwind App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck () {}} />
          <Collapse navbar>
            <Nav className='me-auto' navbar>
              <NavItem>
                <NavLink>
                  <Link to='/form1'>Form Demo 1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to='/form2'>Form Demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              >
                {' '}
              </CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
