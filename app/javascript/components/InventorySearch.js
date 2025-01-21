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

  return React.createElement('div', { className: 'search-container' }, [
    React.createElement('input', {
      type: 'text',
      value: query,
      onChange: handleSearch,
      placeholder: 'Search inventory...',
      className: 'form-control search-input',
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
          React.createElement('div', { key: 'name', className: 'item-name' }, item.name),
          React.createElement('div', { key: 'qty', className: 'item-qty' }, 
            React.createElement('span', { className: 'qty-label' }, 'Stock: '),
            React.createElement('span', { className: 'qty-value' }, item.qty)
          )
        ])
      )
    )
  ])
}

export default InventorySearch 