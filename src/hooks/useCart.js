import { useContext } from 'react'
import { CartContext } from '../context/cart'

function useCart () {
  const { cart, setCart } = useContext(CartContext)
  return {
    cart, setCart
  }
}

export default useCart
