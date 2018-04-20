Rails.application.routes.draw do
  scope '/api' do
    get :toys, to: 'toys#index'
    post :toys, to: 'toys#create'
  end
end
