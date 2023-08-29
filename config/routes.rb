Rails.application.routes.draw do
  get '/ambassadors/accepted', to: 'ambassadors#index_accepted'
  resources :payment_reports
  resources :sales
  resources :apps
  resources :ambassadors

  post '/signup', to: 'ambassadors#create'
  post '/login', to: 'sessions#create'
  post '/admin/login', to: 'sessions#admincreate'
  get '/auth', to: 'ambassadors#auth'
  get '/admin/auth', to: 'admins#auth'
  delete '/logout', to: 'sessions#destroy'
  delete '/admin/logout', to: 'sessions#admindestroy'
  patch '/ambassadors/accept/:id', to: 'ambassadors#accept'
  patch '/ambassadors/deny/:id', to: 'ambassadors#deny'
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
