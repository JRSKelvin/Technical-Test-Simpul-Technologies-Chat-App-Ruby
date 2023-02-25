Rails.application.routes.draw do
  resources :room_messages
  resources :rooms

  root controller: :rooms, action: :index
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
