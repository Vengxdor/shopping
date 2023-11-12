import React from 'react'
import { CartAdd, CartRemove } from './icons'
import useFilter from '../hooks/useFilter'
import useCart from '../hooks/useCart'

export default function Product () {
  const { products } = useFilter()
  const { handleAdd, cart, removeCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <ul className='products w-3/4 gap-3'>
      {products.map((product) => {
        const isProductInCart = checkProductInCart(product)
        return (
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
              onClick={ isProductInCart
                ? () => removeCart(product)
                : () => handleAdd(product)
              }
              className={`text-2xl ${isProductInCart ? 'bg-red-500' : 'bg-sky-400'} p-2 rounded-md m-1` }
            >
              {isProductInCart
                ? <CartRemove/>
                : <CartAdd />
              }
            </button>
          </li>
        )
      })}
    </ul>
  )
}
