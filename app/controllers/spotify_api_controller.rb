class SpotifyApiController < ApplicationController

    def search 
        results = SpotifyApi::Client.search_track(params[:track_name])
        
        first_track = results.dig('tracks', 'items', 0)
        
        audio_analysis_for_first_track = SpotifyApi::Client.audio_analysis(first_track.dig('id'))
        
        first_track['audio_analysis'] = audio_analysis_for_first_track.dig('track')

        render json: first_track, status: :ok
    end

    def audio_analysis 
        results = SpotifyApi::Client.audio_analysis(params[:id])
        render json: results, status: :ok
    end

    def recommendations
        results = SpotifyApi::Client.get_recommendations(params[:id], params[:tempo]).dig('tracks')
        render json: results, status: :ok
    end
end