Rails.application.routes.draw do
  scope '/api' do
    get :toys, to: 'toys#index'
  end
end
