Rails.application.routes.draw do
  resources :payment_reports
  resources :sales
  resources :apps
  resources :ambassadors

  post '/signup', to: 'ambassadors#create'
  post '/login', to: 'sessions#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
