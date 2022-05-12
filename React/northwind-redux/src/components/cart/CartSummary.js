import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import {Link} from 'react-router-dom'
import alertify from "alertifyjs"

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap'
class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product)
    alertify.error(product.productName  + "  sepetten Silindi")

    }


    renderSummary() {
        return (
            <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu   >
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id} >
                            <Badge onClick={()=> this.removeFromCart(cartItem.product)} color="danger" >-</Badge>
                            {cartItem.product.productName}
                            <Badge color="success" >{cartItem.quantity}</Badge>
                        </DropdownItem>

                    ))}
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"} >Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}


            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        actions: { removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch) }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)