Rails.application.routes.draw do
  get 'theaters/index'
  get 'theaters/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'top#index'

  get '/login', to: 'user_sessions#new'
  post '/login', to: 'user_sessions#create'
  delete '/logout', to: 'user_sessions#destroy'

  resources :users, only: [:new, :create]
  resources :theaters, only: [:index, :show]
end
