import { useContext } from 'react'
import { CartContext } from '../context/cart'

function useCart () {
  const { cart, setCart, handleAdd, removeCart } = useContext(CartContext)
  return {
    cart, setCart, handleAdd, removeCart
  }
}

export default useCart
