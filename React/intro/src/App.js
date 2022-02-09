import React, { Component } from 'react'

import CategoryList from './CategoryList'
import Navi from './Navi'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'
import { Route, Routes, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import CartList from './CartList'
import FormDemo1 from './FormDemo1'
import FormDemo2 from './FormDemo2'

export default class App extends Component {
  state = { currentCategory: '', products: [], cart: [] }
  changeCategory = category => {
    this.setState({
      currentCategory: category.categoryName
    })
    this.getProducts(category.id)
  }

  componentDidMount () {
    this.getProducts()
  }
  getProducts = categoryId => {
    let url = 'http://localhost:3000/products'
    if (categoryId) {
      url += '?categoryId=' + categoryId
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = product => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)

    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart })
    alertify.success(product.productName + 'Added to cart!', 2)
  }

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + ' Remoced from cart!', 2)
  }
  render () {
    let productInfo = { title: 'Product List' }
    let categoryInfo = { title: 'Category List' }
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navi>

          <Row>
            <Col xs='3'>
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs='9'>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <ProductList
                      {...props}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  path='/cart'
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path='/form1' component={FormDemo1} />
                <Route path='/form2' component={FormDemo2} />

                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
