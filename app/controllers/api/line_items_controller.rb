class Api::LineItemsController < ApplicationController

    def index
        @items = Order.find(params[:order_id]).line_items
        render json: @items
    end

    def create
        product = Product.find(params[:product_id])
        order_id = params[:order_id]

        @item = product.line_items.create
        @item.update!(name: product.name, price: product.price, qty: 1, order_id: order_id)

        render json: @item
    end

    def update
        @item = Order.find(params[:order_id]).line_items.find(params[:id])
        @item.update!(item_params)

        render json: @item
    end

    def destroy
        @item = Order.find(params[:order_id]).line_items.find(params[:id])
        @item.destroy

        render status: :ok
    end

    private
    def item_params
        params.require(:line_item).permit(:qty)
    end

end
