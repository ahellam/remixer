class SpotifyApiController < ApplicationController

    def search 
        # binding.pry
        results = SpotifyApi::Client.search_track(params[:track_name]).to_json
        render json: results, status: :ok
    end

    def audio_analysis 
        SpotifyApi::Client.audio_analysis(params[:track_id])
    end
end