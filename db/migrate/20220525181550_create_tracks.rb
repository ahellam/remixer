class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.integer :playlist_id
      t.string :name 
      t.string :artist
      t.string :album_name
      t.string :album_image
      t.float :tempo
      t.integer :time_signature
      t.integer :key 
      t.integer :mode 
      t.integer :duration_ms
      t.string :spotify_id
      t.string :uri

      t.timestamps
    end
  end
end
