import * as actionTypes from './actionTypes'



export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function createProductsSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}
export function updateProductsSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError)

}
export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product).then(savedProduct => {
      product.id ? dispatch(updateProductsSuccess(savedProduct)) : dispatch(createProductsSuccess(savedProduct))
    }).catch(error => { throw error })
  }
}

export function handleResponse(response) {
    if(response.ok){
      return response.json()

    }


    // const error = await response.text()
    const error =   response.text()
    throw new Error(error)
}

export function handleError(error) {
  console.error("Bir hata oluştu")
  throw error
}


export function getProducts(categoryId) {

  return function (dispatch) {
    let url = 'http://localhost:3000/products'
    if (categoryId) {
      url = url + "?categoryId=" + categoryId
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)))
  }
}