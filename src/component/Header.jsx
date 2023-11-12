import React from 'react'
import CartShop from './Cart'

function Header () {
  return (
    <header className='flex justify-between items-center w-9/12 m-4'>
      <div></div>
      <h1 className='text-4xl '>Shopping cart</h1>
      <CartShop/>
    </header>
  )
}

export default Header
