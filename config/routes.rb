Rails.application.routes.draw do
  resources :random_sentences
  resources :student_levels
  resources :sentence_scores
  resources :mcm_topics
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'

end
