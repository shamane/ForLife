Rails.application.routes.draw do
  scope '/api' do
    resources :cover_images
  end
end
