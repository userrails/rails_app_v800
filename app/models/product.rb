class Product < ApplicationRecord
  has_one_attached :featured_image

  has_rich_text :description

  validates :name, presence: true

  after_create :notify_creation

  private

  def notify_creation
    ProductJob.perform_later(id)
  end
end
