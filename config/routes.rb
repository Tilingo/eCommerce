Rails.application.routes.draw do
  namespace :api do

    resources :products do
      resources :line_items
    end
    
    resources :orders do
      resources :line_items
    end

  end
end
