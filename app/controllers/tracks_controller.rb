class TracksController < ApplicationController

    def index
        render json: Track.all
    end

    def show
        track = Track.find(params[:id])
        render json: track 
    end

    def create 
        track = Track.create!(track_params)
        render json: track, status: :created
    end

    def destroy 
        track = track.find(params[:id])
        track.destroy
        head :no_content
    end

    private 

    def track_params
        params.permit(
            :playlist_id, 
            :name, 
            :artist,
            :album_name, 
            :album_image, 
            :tempo, 
            :time_signature, 
            :key, 
            :mode, 
            :duration_ms, 
            :spotify_id, 
            :uri
        )
    end
end
