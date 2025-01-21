module Api
  class InventoryController < ApplicationController
    def search
      @products = Product.where("name LIKE ?", "%#{params[:q]}%")
      render json: @products.as_json(only: [:id, :name, :qty])
    end
  end
end 