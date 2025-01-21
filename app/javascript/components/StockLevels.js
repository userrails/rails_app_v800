import React, { useState, useEffect } from 'react'

const StockLevels = () => {
  const [products, setProducts] = useState([])

  const fetchStockLevels = async () => {
    const response = await fetch('/api/inventory/stock_levels')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchStockLevels()
    const interval = setInterval(fetchStockLevels, 30000)
    return () => clearInterval(interval)
  }, [])

  return React.createElement('div', { className: 'stock-levels' }, [
    React.createElement('h3', { key: 'title' }, 'Real-time Stock Levels'),
    React.createElement('div', { className: 'stock-grid', key: 'grid' },
      products.map(product => 
        React.createElement('div', { 
          key: product.id,
          className: `stock-item ${product.qty < 10 ? 'low-stock' : ''}`
        }, [
          React.createElement('div', { key: 'name', className: 'product-name' }, product.name),
          React.createElement('div', { key: 'qty', className: 'qty' }, 
            React.createElement('span', { 
              className: `qty-badge ${product.qty < 10 ? 'warning' : ''}`
            }, product.qty)
          ),
          React.createElement('div', { key: 'status' }, 
            product.qty < 10 ? 'Low Stock!' : 'In Stock'
          )
        ])
      )
    )
  ])
}

export default StockLevels 