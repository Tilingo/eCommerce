class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render json: @products
    end

    def create
        @product = Product.create!(product_params)
        render json: @product
    end

    def show
        @product = Product.find(params[:id])
        render json: @product
    end
    
    def update
        @product = Product.find(params[:id])
        @product.update!(product_params)
        render json: @product
    end
    
    def destroy
        @product = Product.find(params[:id]).destroy
        render status: :ok
    end
    
    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :photo_url)
    end

end
