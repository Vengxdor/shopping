export const ACTIONS = {
  ADD_TO_CART: 'add_to_cart',
  REMOVE_FROM_CART: 'remove_from_cart'
}

export function cartChanger (cart, action) {
  const { product } = action
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const productInCartIndex = cart.findIndex(item => item.id === product.id)
      if (productInCartIndex >= 0) {
        const cloneProduct = structuredClone(cart)
        cloneProduct[productInCartIndex].quantity += 1
        return cloneProduct
      }
      return [...cart, { ...product, quantity: 1 }]
    }

    case ACTIONS.REMOVE_FROM_CART: {
      return cart.filter(item => item.id !== product.id)
    }
  }
}
