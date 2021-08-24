Rails.application.routes.draw do
  root 'blog#landing'

  get '/api', to: 'blogpost#index'
  get '/api/all', to: 'blogpost#index'
  post '/api/create', to: 'blogpost#create'
  get '/api/:title', to: 'blogpost#show'

  resources :blogpost, only: %i[index show create update destroy]
end
