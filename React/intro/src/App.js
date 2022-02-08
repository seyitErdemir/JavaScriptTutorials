import React, { Component } from 'react'

import CategoryList from './CategoryList'
import Navi from './Navi'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'

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
  }

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
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
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
