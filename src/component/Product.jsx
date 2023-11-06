import React from 'react'
import item from '../mocks/products.json'
import { CartAdd } from './icons'
import useFilter from '../hooks/useFilter'
import useCart from '../hooks/useCart'

export default function Product () {
  const { filterProducts } = useFilter()
  const products = filterProducts(item.products)
  const { cart, setCart } = useCart()

  const handleAdd = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const cloneProduct = structuredClone(cart)
      cloneProduct[productInCartIndex].quantity += 1
      return setCart(cloneProduct)
    }

    // if the item is not in the cat
    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  return (
    <ul className='products w-3/4  gap-3'>
      {products.map((product) => (
        <li className='bg-product p-4 ' key={product.id}>
          <img
            className='aspect-[5/4] object-cover w-full h-auto'
            src={product.thumbnail}
            alt={product.title}
          />
          <h4 className='text-xl'>
            {product.title} - ${product.price}
          </h4>

          <button
            onClick={() => handleAdd(product)}
            className='text-2xl bg-sky-400 p-2 rounded-md m-1'
          >
            <CartAdd />
          </button>
        </li>
      ))}
    </ul>
  )
}
