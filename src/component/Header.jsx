import React, { useId } from 'react'
import { Cart } from './icons'

function Header () {
  const checkId = useId()
  return (
    <header className='flex justify-between items-center w-9/12 m-4'>
      <div></div>
      <h1 className='text-4xl '>Shopping cart</h1>
      <div className='flex'>
        <label htmlFor={checkId} className='text-3xl cursor-pointer hover:bg-sky-700 hover:scale-110 bg-sky-400 p-2 rounded-3xl '>
        <Cart />
        </label>
        <input className='appearance-none cart-button' type="checkbox" id={checkId} />
        <aside className="absolute inset-0 h-screen bg-black w-1/3 -left-96 cart p-3">
          <h3 className='text-4xl text-center uppercase'>Cart</h3>
          <ul>

          </ul>
        </aside>
      </div>
    </header>
  )
}

export default Header
