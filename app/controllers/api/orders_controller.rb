class Api::OrdersController < ApplicationController

    def index   
        @orders = Order.all
        render json: @orders
    end

    def create
        product_id = params[:product_id]
        product = Product.find(product_id)

        @order = product.orders.create!(order_params)
        @item = LineItem.last
        @item.update!(name: product.name, price: product.price, qty: 1)

        render json: @order
    end

    def show
        @order = Order.find(params[:id])
        render json: @order
    end
    
    # def update
    #     @product = Product.find(params[:id])
    #     @product.update!(product_params)
    #     render json: @product
    # end
    
    # def destroy
    #     @product = Product.find(params[:id]).destroy
    #     render status: :ok
    # end
    
    private
    def order_params
        params.require(:order).permit(:status)
    end

end
