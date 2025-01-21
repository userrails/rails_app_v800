class AddQtyAndPriceOnStockHistories < ActiveRecord::Migration[8.0]
  def change
    add_column :stock_histories, :qty, :integer
    add_column :stock_histories, :price, :decimal
  end
end
