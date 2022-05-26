class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :song_count, :tempo_avg
  has_many :tracks

  def song_count
    object.tracks.count
  end

  def tempo_avg
    array = []
    tracks = object.tracks
    tempos = tracks.each do |track|
      array << track[:tempo]
    end
    avg = array.sum / tracks.count
    return avg
  end
end
