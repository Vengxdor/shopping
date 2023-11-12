import { useContext } from 'react'
import { FilterContext } from '../context/Filter-context'
import item from '../mocks/products.json'

function useFilter () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  const products = filterProducts(item.products)
  return {
    filters,
    setFilters,
    products
  }
}

export default useFilter
