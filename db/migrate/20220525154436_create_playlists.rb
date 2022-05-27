class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :song_count
      t.float :tempo_avg
      t.integer :user_id
      t.timestamps
    end
  end
end
