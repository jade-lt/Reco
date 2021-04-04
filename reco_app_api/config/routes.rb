Rails.application.routes.draw do
  namespace :api do 
    post 'auth/login', to: 'auth#login'
    resources :recos
    resources :users
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
