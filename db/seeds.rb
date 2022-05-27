# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts '🌱 Seeding Starting....'

u1 = User.create!(
    username: 'Aaron',
    email: 'remixer@gmail.com',
    password: 'password'
)

p1 = Playlist.create!(
    user_id: u1.id,
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


p2 = Playlist.create!(
    user_id: u1.id,
    name: 'Slow Sexy Hits in Cmin', 
    image: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
    description: 'Various artists and tracks with a target tempo of 94, a tempo tolerance of +/- 5, and key of C minor.'
)

t4 = Track.create!(
    playlist_id: p2.id,
    name: 'Sexual Healing',
    artist: 'Marvin Gaye',
    album_name: 'Midnight Love',
    album_image: 'https://i.scdn.co/image/ab67616d00001e0246e859872ed30a898160aeb2',
    tempo: 94.382,
    time_signature: 4,
    key: 0, 
    mode: 0,
    duration_ms: 238600,
    spotify_id: '3VZmChrnVW8JK6ano4gSED',
    uri: 'spotify:track:3VZmChrnVW8JK6ano4gSED'
)

t5 = Track.create!(
    playlist_id: p2.id,
    name: 'Alone Together',
    artist: 'Daley',
    album_name: 'Those Who Wait',
    album_image: 'https://i.scdn.co/image/ab67616d00001e02e5cf8519d7f2139ceb131e13',
    tempo: 89.459,
    time_signature: 4,
    key: 0, 
    mode: 0,
    duration_ms: 239640,
    spotify_id: '4bx93Btylz6Rl6QIOrtBV4',
    uri: 'spotify:track:4bx93Btylz6Rl6QIOrtBV4'
)

t6 = Track.create!(
    playlist_id: p2.id,
    name: 'I Feel It Coming',
    artist: 'The Weeknd',
    album_name: 'Starboy',
    album_image: 'https://i.scdn.co/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a',
    tempo: 92.99,
    time_signature: 4,
    key: 0, 
    mode: 0,
    duration_ms: 269187,
    spotify_id: '5GXAXm5YOmYT0kL5jHvYBt',
    uri: 'spotify:track:5GXAXm5YOmYT0kL5jHvYBt'
)

t7 = Track.create!(
    playlist_id: p2.id,
    name: 'Hymn for the Weekend',
    artist: 'Coldplay',
    album_name: 'A Head Full of Dreams',
    album_image: 'https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6',
    tempo: 90.027,
    time_signature: 4,
    key: 0, 
    mode: 0,
    duration_ms: 258267,
    spotify_id: '3RiPr603aXAoi4GHyXx0uy',
    uri: 'spotify:track:3RiPr603aXAoi4GHyXx0uy'
)
puts 'seeding COMPLETE 🌱'