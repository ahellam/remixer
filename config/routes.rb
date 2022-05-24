Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "spotify_api/search", to: "spotify_api#search"

  get "spotify_api/audio-analysis", to: "spotify_api#audio_analysis"

  get "spotify_api/recommendations", to: "spotify_api#recommendations"

  get "spotify_api/audio-features", to: "spotify_api#audio_features"

end
