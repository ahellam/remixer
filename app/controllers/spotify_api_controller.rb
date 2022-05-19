class SpotifyApiController < ApplicationController

    def search 
        # binding.pry
        results = SpotifyApi::Client.search_track(params[:track_name])
        render json: results, status: :ok
    end

    def audio_analysis 
        results = SpotifyApi::Client.audio_analysis(params[:id])
        render json: results, status: :ok
    end
end