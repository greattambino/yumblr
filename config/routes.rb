Rails.application.routes.draw do
  root to: "static_pages#root"

  get "sign_in" => "static_pages#sign_in"
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]

  namespace :api, defaults: { format: :json } do
    resources :food_items, only: [:index, :show]
    resources :restaurants, only: [:index, :show]
    resources :cuisines, only: [:index]
    resources :categories, only: [:index]
    resources :users, only: [:show]
    resources :likes, only: [:create, :destroy]
    get "user_likes" => "likes#user_index"
  end
end
