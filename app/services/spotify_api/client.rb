module SpotifyApi
    class Client 

        class << self
            attr_accessor :access_token
            
            [:get, :post].each do |action| 
                define_method(action) do |*args, &block|
                    if access_token.nil? 
                        @access_token = get_access_token
                    end
                    wrapped_connection(action, *args) { connection.public_send(action, *args, &block) }
                end
            end

            def wrapped_connection(action, *args)
                response = yield
                if response.success?
                    JSON.parse(response.body)
                else
                   @access_token = get_access_token
                   wrapped_connection(action, *args) { connection.public_send(action, *args) }
                end
            end

            # search by a track ID
            def get_track(id)
                get("tracks/#{id}")
            end

            # get track analysis details
            def audio_analysis(id) 
                get("audio-analysis/#{id}")
            end

            def get_recommendations(id,tempo) 
                get("recommendations?seed_tracks=#{id}&min_tempo=#{tempo.to_i - 3}&max_tempo#{tempo.to_i + 3}")
            end

            # search by a track name 
            def search_track(track_name)
                get("search?q=#{track_name}&type=track")
            end

            def credentials
                Base64.encode64(Rails.application.credentials.spotify[:client_id] + ':' + Rails.application.credentials.spotify[:client_secret]).delete("\n")
            end

            # base endpoint to then add custom endpoints to the end 
            def connection
                Faraday.new(url: 'https://api.spotify.com/v1', headers:{'Authorization' => "Bearer #{access_token}"})
            end

            def get_access_token
                response = Faraday.post('https://accounts.spotify.com/api/token', {grant_type: 'client_credentials'}, {
                    'Authorization' => "Basic #{credentials}", 'Content-Type' => 'application/x-www-form-urlencoded'
                })
                JSON.parse(response.body).dig("access_token")
            end
        end

    end
end