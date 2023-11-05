/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
