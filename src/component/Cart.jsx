import React, { useId } from 'react'
import { Cart } from './icons'
import useCart from '../hooks/useCart'

function CartShop () {
  const { cart, removeCart, handleAdd } = useCart()
  const checkId = useId()

  return (
    <div className='flex'>
      <label
        htmlFor={checkId}
        className='text-3xl cursor-pointer hover:bg-sky-700 hover:scale-110 bg-sky-400 p-2 rounded-3xl '
      >
        <Cart />
      </label>
      <input
        className='appearance-none cart-button'
        type='checkbox'
        id={checkId}
      />
      <aside className='absolute inset-0 h-screen bg-black w-1/3  -left-[100rem] cart p-3'>

          <h3 className='text-4xl text-center uppercase'>Cart</h3>
          <ul>
            {cart.map((product) => (
              <li className='bg-product p-4 ' key={product.id}>
                <img
                  className='aspect-[5/4] object-cover w-full h-auto'
                  src={product.thumbnail}
                  alt={product.title}
                  />
                <h4 className='text-xl my-2'>
                  {product.title} - ${product.price}
                </h4>

                <button
                  onClick={() => removeCart(product)}
                  className='text-xl bg-sky-400 p-0.5 rounded-md m-1 mr-2'
                >
                  Remove
                </button>
                <span>Quantity: {product.quantity}</span>
                <button onClick={() => handleAdd(product)} className='text-xl bg-sky-400 p-0.5 px-2  rounded-md mx-2'>+</button>
              </li>
            ))}
          </ul>
      </aside>
    </div>
  )
}

export default CartShop
