import React from 'react'
import { Container } from 'reactstrap'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'
import { Route,Routes, Switch } from 'react-router-dom'
import CartDetail from '../cart/CartDetail'
function App() {
  return (
    <Container>
      <Navi> </Navi>
      <Routes>

        <Route  exact path="/" element={<Dashboard/>} />
        <Route    exact path="/product" element={<Dashboard/>} />
        <Route    exact path="/cart" element={<CartDetail/>} /> 
 
      </Routes>
    </Container>
  )
}

export default App
