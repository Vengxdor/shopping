import React from 'react'
import Product from './component/product'
import Filters from './component/Filters'

function App () {
  return (
    <main className='flex flex-col items-center'>

      <h1 className='text-4xl mb-4'>Shopping cart</h1>
      <Filters/>
      <Product/>
    </main>
  )
}

export default App
