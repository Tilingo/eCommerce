Rails.application.routes.draw do
  namespace :api do

    resources :products do
      resources :line_items
    end
    
    get 'orders/last', to: 'orders#last_order'
    resources :orders do
      resources :line_items
    end


  end
end
