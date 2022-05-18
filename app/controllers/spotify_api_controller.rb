class SpotifyApiController < ApplicationController

    def search 
        SpotifyApi::Client.search_track(params[:track_name])
    end

    def audio_analysis 
        SpotifyApi::Client.audio_analysis(params[:track_id])
    end