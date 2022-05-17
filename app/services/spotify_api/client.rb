module SpotifyApi
    class Client 

        class << self

            def get_track(id)
                connection.get("tracks/#{id}")
            end

            def search_track(track_name)
                response = connection.get("search?q=#{track_name}&type=track")
                JSON.parse(response.body)
            end

            def credentials
                Base64.encode64(Rails.application.credentials.spotify[:client_id] + ':' + Rails.application.credentials.spotify[:client_secret]).delete("\n")
            end

            def access_token
                nil
            end

            def connection
                Faraday.new(url: 'https://api.spotify.com/v1', headers:{'Authorization' => "Bearer #{access_token}"})
            end

            def get_access_token
                Faraday.post('https://accounts.spotify.com/api/token', {grant_type: 'client_credentials'}, {
                    'Authorization' => "Basic #{credentials}", 'Content-Type' => 'application/x-www-form-urlencoded'
                })
            end
        end

    end
end