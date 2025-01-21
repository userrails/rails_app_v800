import React, { useState } from 'react'

const InventorySearch = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)
    
    const response = await fetch(`/api/inventory/search?q=${searchQuery}`)
    const data = await response.json()
    setResults(data)
  }

  return React.createElement('div', null, [
    React.createElement('input', {
      type: 'text',
      value: query,
      onChange: handleSearch,
      placeholder: 'Search inventory...',
      className: 'form-control',
      key: 'search-input'
    }),
    React.createElement('div', { 
      className: 'results-container',
      key: 'results-container'
    }, 
      results.map(item => 
        React.createElement('div', { 
          key: item.id,
          className: 'result-item'
        }, [
          React.createElement('span', { key: 'name' }, item.name),
          React.createElement('span', { key: 'qty' }, ` -> ${item.qty} in stock`)
        ])
      )
    )
  ])
}

export default InventorySearch 