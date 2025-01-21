// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"
import "channels"

// Import React components
import React, { useEffect, useRef } from 'react'

import ReactDOM from "react-dom"
import HelloWorld from "components/HelloWorld"
import InventorySearch from "components/InventorySearch"
import StockLevels from "components/StockLevels"
import InventoryTrends from "components/InventoryTrends"

// Mount React in specific parts of the app
document.addEventListener("turbo:load", () => {
  const root = document.getElementById("react-root");
  if (root) {
    ReactDOM.render(React.createElement(HelloWorld), root);
  }

  const searchRoot = document.getElementById("inventory-search");
  if (searchRoot) {
    ReactDOM.render(React.createElement(InventorySearch), searchRoot);
  }

  const stockRoot = document.getElementById("stock-levels");
  if (stockRoot) {
    ReactDOM.render(React.createElement(StockLevels), stockRoot);
  }

  const trendsRoot = document.getElementById("inventory-trends");
  if (trendsRoot) {
    ReactDOM.render(React.createElement(InventoryTrends), trendsRoot);
  }
});
