// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"
import "channels"

// Import React components
import React from "react"
import ReactDOM from "react-dom"
import HelloWorld from "components/HelloWorld"
import InventorySearch from "components/InventorySearch"

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
});
