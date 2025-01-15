class Product < ApplicationRecord
  has_one_attached :featured_image

  has_rich_text :description

  validates :name, presence: true

  after_create :notify_creation
  after_create :broadcast_event

  private

  def notify_creation
    ProductJob.perform_later(id)
  end

  def broadcast_event
    # Using the SolidCable format
    ActionCable.server.broadcast(
      "notifications_#{Current.user&.id}",
      {
        message: "Product #{self.id} created successfully",
        type: "success",
        product_id: self.id,
        timestamp: Time.current
      }
    )
  end
end
