module Api
  class InventoryController < ApplicationController
    def search
      @products = Product.where("name LIKE ?", "%#{params[:q]}%")
      render json: @products.as_json(only: [ :id, :name, :qty ])
    end

    def stock_levels
      @products = Product.all
      render json: @products.as_json(only: [ :id, :name, :qty ])
    end

    def trends
      @trends = StockHistory
        .where("created_at >= ?", 30.days.ago)
        .group_by { |h| h.created_at.to_date }
        .map { |date, histories| {
          date: date.strftime("%Y-%m-%d"),
          qty: histories.sum(&:qty)
        }}
        .sort_by { |h| h[:date] }
      render json: @trends
    end
  end
end
