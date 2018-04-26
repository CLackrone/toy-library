Rails.application.routes.draw do

  scope '/api' do 
    resources :toys, except: [:new, :edit, :show]
  end
  
end


#scope '/api' do
    #get :toys, to: 'toys#index'
    #post :toys, to: 'toys#create'
  #end