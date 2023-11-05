import React, { useId } from 'react'
import useFilter from '../hooks/useFilter'

function Filters () {
  const rangeInputId = useId()
  const categoryId = useId()
  const { filters, setFilters } = useFilter()
  return (
    <section className='flex justify-between  w-9/12 mb-3'>
      <div className='flex items-center gap-3'>
        <label htmlFor={rangeInputId}>Min Price</label>
        <input
          min={0}
          max={2000}
          value={filters.minPrice}
          type='range'
          id={rangeInputId}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minPrice: e.target.value
            }))
          }
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className='flex items-center gap-3'>
        <label htmlFor={categoryId}>Category</label>
        <select
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              category: e.target.value
            }))
          }
          id={categoryId}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
