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
    array.empty? ? 0 : avg = array.sum / tracks.count
    avg.nil? ? avg : 0
  end
end
