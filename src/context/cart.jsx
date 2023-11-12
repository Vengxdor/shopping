/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react'
import { cartChanger, ACTIONS } from '../component/reducers/cartReducer'

export const CartContext = createContext()

function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(cartChanger, JSON.parse(localStorage.getItem('cart')) || [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAdd = (product) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, product })
  }

  const removeCart = (product) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, product })
    localStorage.removeItem('cart')
  }

  return (
    <CartContext.Provider value={{ cart, handleAdd, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
