Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'messages/index'
      post 'messages/create'
      delete 'messages/:id', to: 'messages#destroy'
    end
  end

  root 'statics#index'

end
