Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'quotes', to: 'pages#home'
  get 'quotes/:id', to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # API routing
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :quotes, only: [ :index, :update]
    end
  end
end
