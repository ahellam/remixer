class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album_name, :album_image, :tempo, :time_signature, :key, :mode, :duration_ms, :spotify_id, :uri, :playlist_id
end
