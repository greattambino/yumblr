Rails.application.routes.draw do
  root to: "static_pages#root"

  get "login" => "sessions#new"
  get "sign_up" => "users#new"
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]

  namespace :api, defaults: { format: :json } do
    resources :food_items, only: [:index, :show]
    resources :restaurants, only: [:index, :show]
    resources :cuisines, only: [:index]
    resources :categories, only: [:index]
    resources :users, only: [:show]
    resources :likes, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
    get "user_likes" => "likes#user_index"
  end
end
