Rails.application.routes.draw do
  resource :session
  resources :passwords, param: :token
  root "products#index"
  resources :products
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  get "about", to: "pages#about", as: :about
  get "contact", to: "pages#contact", as: :contact
  get "services", to: "pages#services", as: :services
  get "home", to: "home#index", as: :home
  
  resources :categories

  namespace :api do
    get 'inventory/search'
    get 'inventory/stock_levels'
    get 'inventory/trends'
  end
end
