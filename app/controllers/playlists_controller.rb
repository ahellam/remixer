class PlaylistsController < ApplicationController

    def index
        render json: Playlist.all
    end

    def show
        playlist = Playlist.find(params[:id])
        render json: playlist 
        # , include: :songs?
    end

    def create 
        playlist = Plalist.create!(playlist_params)
        render json: playlist, status: :created
    end

    def destroy 
        playlist = Playlist.find(params[:id])
        playlist.destroy
        head :no_content
    end

    private 

    def playlist_params
        params.permit(:name, :image, :description)
    end
end
