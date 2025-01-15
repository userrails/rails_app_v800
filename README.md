# README

## Solid Queue

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
