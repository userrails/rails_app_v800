# README

## Solid Queue : Efficient DB-Backed Job Processing using AJ
### No need Redis, Sidekiq, Resque
## DB: MySQL, PostgreSQL, or SQLite
## Reduces complexity and costs

* `gem "solid_queue"`
* First recreate and migrate the main database `bin/rails db:prepare`
* `bin/rails solid_queue:install FORCE=true`
* Reinstall solid_queue (this should regenerate queue_schema.rb) `rails db:create:queue`
* Create the queue database structure `bin/rails db:queue:schema:load`
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