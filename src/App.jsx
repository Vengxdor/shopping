import React from 'react'
import Product from './component/product'
import Filters from './component/Filters'
import Header from './component/Header'
import CartProvider from './context/cart'

function App () {
  return (
    <CartProvider>
      <main className='flex flex-col items-center'>
        <Header />
        <Filters />
        <Product />
      </main>
    </CartProvider>
  )
}

export default App
