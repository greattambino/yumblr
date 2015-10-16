Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :show]
    resources :food_items, only: [:index, :show]
    resources :users, only: [:show]
  end
end