# app/jobs/product_job.rb
class ProductJob < ApplicationJob
  self.queue_adapter = :solid_queue
  queue_as :default

  def perform(product_id)
    product = Product.find(product_id)
    puts "product created with information #{product.id}"
  end
end
