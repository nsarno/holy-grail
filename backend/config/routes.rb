Rails.application.routes.draw do
  root to: 'application#index'
  resources :auth
  resources :users, except: [:new, :edit]
end

