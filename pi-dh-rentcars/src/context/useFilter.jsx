import { createContext, useContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider(props) {
  const [filter, setFilter] = useState({
    category: null,
    city: null,
    dateRange: null,
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)

  return context
}
