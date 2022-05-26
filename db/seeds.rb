# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts '🌱 Seeding Starting....'

p1 = Playlist.create!(
    name: 'Groovy Jams in F#', 
    image: 'https://images.unsplash.com/photo-1605731414532-6b26976cc153?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070', 
    description: 'Various artists and tracks with a target tempo of 116, a tempo tolerance of +/- 5, and key of F#/Gb minor.'
)

t1 = Track.create!(
    playlist_id: p1.id,
    name: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers) - Radio Edit',
    artist: 'Daft Punk',
    album_name: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers) [Radio Edit]',
    album_image: 'https://i.scdn.co/image/ab67616d00001e021d5cf960a92bb8b03fc2be7f',
    tempo: 116.047,
    time_signature: 4,
    key: 6, 
    mode: 0,
    duration_ms: 248413, 
    spotify_id: '2Foc5Q5nqNiosCNqttzHof', 
    uri: 'spotify:track:2Foc5Q5nqNiosCNqttzHof'
)

t2 = Track.create!(
    playlist_id: p1.id,
    name: 'D.A.N.C.E.',
    artist: 'Justice',
    album_name: 'Cross',
    album_image: 'https://i.scdn.co/image/ab67616d00001e02e6812fbd0690bf6e2bafe2ee',
    tempo: 113.126,
    time_signature: 4,
    key: 6,
    mode: 0,
    duration_ms: 209987,
    spotify_id: '2hQCzcb3qyZirWzOD5Yzoj',
    uri: 'spotify:track:2hQCzcb3qyZirWzOD5Yzoj'
)

t3 =Track.create!(
    playlist_id: p1.id,
    name: 'Say My Name (feat. Zyra)',
    artist: 'ODESZA',
    album_name: 'In Return',
    album_image: 'https://i.scdn.co/image/ab67616d00001e022d86f76b4e373e312f3662b5',
    tempo: 115.048,
    time_signature: 4,
    key: 6, 
    mode: 0,
    duration_ms: 262957,
    spotify_id: '1LeItUMezKA1HdCHxYICed',
    uri: 'spotify:track:1LeItUMezKA1HdCHxYICed'
)

puts 'seeding COMPLETE 🌱'