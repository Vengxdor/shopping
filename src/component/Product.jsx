import React from 'react'
import item from '../mocks/products.json'
import { CartAdd } from './icons'
import useFilter from '../hooks/useFilter'

export default function Product () {
  const { filterProducts } = useFilter()
  const products = filterProducts(item.products)
  return (
    <ul className='products w-3/4  gap-3'>
      {products.map(product => (
        <li className='bg-product p-4 ' key={product.id}>
          <img className='aspect-[5/4] object-cover w-full h-auto' src={product.thumbnail} alt={product.title} />
          <h4 className='text-xl'>{product.title} - ${product.price}</h4>

          <button className='text-2xl bg-sky-400 p-2 rounded-md m-1'>
            <CartAdd/>
          </button>
        </li>
      ))
      }
    </ul>
  )
}
