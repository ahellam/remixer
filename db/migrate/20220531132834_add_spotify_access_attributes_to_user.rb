class AddSpotifyAccessAttributesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :access_token, :string
    add_column :users, :refresh_token, :string
    add_column :users, :expires_at, :datetime
  end
end
