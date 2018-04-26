Rails.application.routes.draw do

  scope '/api' do 
    resources :toys, except: [:new, :edit, :show]
  end
  
end

