import initialState from './initialState'
import * as actionTypes from '../actions/actionTypes'

export default function productListReducer(
    state = initialState.products,
    action
) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload

        default:
            return state
    }
}
