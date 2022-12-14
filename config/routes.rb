Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get '/clients', to: 'clients#index'
  get '/clients/:id', to: 'clients#show'
  post '/clients', to: 'clients#create'
  delete '/clients/:id', to: 'clients#destroy'
  # patch '/clients/:id', to: 'clients#update'

  get '/invoices', to: 'invoices#index'
  get '/invoices/:id', to: 'invoices#show'
  post '/invoices', to: 'invoices#create'
  delete '/invoices/:id', to: 'invoices#destroy'
  # patch '/invoices/:id', to: 'invoices#update'

  get '/listings', to: 'listings#index'
  get '/listings/:id', to: 'listings#show'
  post '/listings', to: 'listings#create'
  delete '/listings/:id', to: 'listings#destroy'
  patch '/listings/:id', to: 'listings#update'
  get '/search', to: 'listings#search'
  post '/get_listing_by_user', to: 'listings#get_listing_by_user'

  get '/reviews', to: 'reviews#index'
  get '/reviews/:id', to: 'reviews#show'
  post '/reviews', to: 'reviews#create'
  delete '/reviews/:id', to: 'reviews#destroy'
  # patch '/reviews/:id', to: 'reviews#update'

  get '/sellers', to: 'sellers#index'
  get '/sellers/:id', to: 'sellers#show'
  post '/sellers', to: 'sellers#create'
  delete '/sellers/:id', to: 'sellers#destroy'
  # patch '/sellers/:id', to: 'sellers#update'

  get '/transactions', to: 'transactions#index'
  get '/transactions/:id', to: 'transactions#show'
  post '/trans', to: 'transactions#find_by_user'
  post '/transactions', to: 'transactions#create'
  patch'/transactions/:id', to: 'transactions#edit_listing_status'
  patch'/trans_by_listing/:id', to: 'transactions#trans_by_listing'
  delete '/transactions/:id', to: 'transactions#destroy'
  patch '/transactions/:id', to: 'transactions#update'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#destroy'
  post '/make_seller', to: 'users#make_seller'
  # patch '/users/:id', to: 'users#update'

  post '/check_user', to: "users#check_login"
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  
  get '/users/suggested/:listing_id', to: 'users#get_suggested_listings'


end
