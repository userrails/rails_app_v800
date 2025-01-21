class AddQtyOnProducts < ActiveRecord::Migration[8.0]
  def change
    add_column :products, :qty, :integer, default: 0
  end
end
