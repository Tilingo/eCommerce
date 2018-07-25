class Api::LineItemsController < ApplicationController

    def index
        @items = Order.find(params[:order_id]).line_items
        render json: @items
    end

end
