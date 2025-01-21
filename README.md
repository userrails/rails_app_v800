# README

## Solid Queue : Efficient DB-Backed Job Processing using AJ
### No need Redis, Sidekiq, Resque
## DB: MySQL, PostgreSQL, or SQLite
## Reduces complexity and costs

* `gem "solid_queue"`
* 
* queue:
*    <<: *default
*    database: storage/development.sqlite3
* 
* First recreate and migrate the main database `bin/rails db:prepare`
* `bin/rails solid_queue:install FORCE=true`
* Reinstall solid_queue (this should regenerate queue_schema.rb) `rails db:create:queue`
* Create the queue database structure `bin/rails db:queue:schema:load` || `bin/rails db:schema:load`
* Solid Queue tables required e.g: solid_queue_blocked_executions
* sqlite3 storage/development.sqlite3
*    .tables
* After confirmation queue schema loaded with solid queue related tables, `rails solid_queue:start`
* not part of regular schema

## Solid Cache: Redis-free caching technique

* Designed to use app's database to handle caching, simplifying deployment and reduce costs associated with external caching services like Redis.
* Supports multiple backends: while it doesn't require Redis, it still supports various caching backends like in-memory storage and file storage.
* Supports all traditional Rails caching techniques queries, fragment and action caching
* By using DB, it reduces the need for extra caching services and simplifies your architecture
* 
* solid_cache_entries >> 1|development:all_products||2025-01-15 07:49:27.967|164890681108085263|633
* 
* development.rb config > `config.cache_store = :solid_cache_store`
* 
* DB config
* cache:
*    <<: *default
*    database: storage/development.sqlite3
* 
* Ensure cache created: Rails.cache.fetch("all_products")

## Solid Cable: Redis-free Real-time Websocket communication

* Built on a top of ActionCable
* Uses Hotwire(Turbo and Stimulus) for realtime updates without JavaScript.
* Multiple backends: supports SQL DB to handle websockets
* High Scalability: without using Redis, suitable for apps that requires large-scale real-time communication.
* 
* NotificationChannel transmitting {"message" => "Product 10 created successfully", "type" => "success", "product_id" => 10, "timestamp" => "2025-01-15T17:10:48.362Z"} (via streamed from notifications_1)

## Tailwind
* `gem "tailwindcss-rails", "~> 3.2"`
* tailwind.config.js
* run `bin/dev`
* Apply some tailwind changes

## ReactJS
* Suggested to use Hotwire which by default comes on Rails8. But we can also use bundle Vue or ReactJS.
* In this test app, addedd ReactJS component HelloWorld to render in HomeController
* Note: Mixing Hotwire and ReactJS might collide each other
* Using ReactJS, Rails API, added InventorySearch and Realtime StockLevels components to render in HomeController aka Inventory Dashboard
* Stock notification each after 30 secs.
* 
