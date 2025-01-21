import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const InventoryTrends = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  const fetchTrendData = async () => {
    const response = await fetch('/api/inventory/trends')
    const data = await response.json()
    return data
  }

  const initChart = async () => {
    const data = await fetchTrendData()
    const ctx = chartRef.current.getContext('2d')

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Stock Levels',
          data: data.map(d => d.qty),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Inventory Trends Over Time'
          }
        },
        scales: {
          y: {
            
            beginAtZero: true,
            title: {
              display: true,
              text: 'Quantity'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        }
      }
    })
  }

  useEffect(() => {
    initChart()
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return React.createElement('div', { className: 'trends-container' },
    React.createElement('canvas', {
      ref: chartRef,
      className: 'trends-chart'
    })
  )
}

export default InventoryTrends