import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Create({playlists, setPlaylists}) {
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    let navigate = useNavigate();

    function handleClick() {

        const playlistData = {
            user_id: 1,
            name: name,
            description: description,
            image: image
        }
        console.log(playlistData)
        fetch('http://localhost:3000/playlists', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playlistData),
    })
        .then(res => res.json())
        .then((newPlaylist) => setPlaylists([...playlists, newPlaylist]))
        .then(() => {navigate('/playlists')})
    }


  return (
    <div className="bg-neutral-800 h-screen text-green-400 grid grid-cols-12 grid-rows-6 pt-2 text-left">
        <label className="font-bold col-span-4 m-3">
            Playlist Name: &nbsp; <br></br>
            <textarea
                className="border-2 rounded-sm text-black break-words col-span-3 w-full row-span-1 resize-none"
                type="text"
                placeholder="Create a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>

        <label className="font-bold col-span-4 m-3">
            Description: &nbsp; <br></br>
            <textarea
                className="border-2 rounded-sm text-black break-words col-span-3 w-full row-span-1 resize-none"
                type="text"
                placeholder="Enter a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </label>

        <label className="font-bold col-span-4 m-3">
            Playlist Image: &nbsp; <br></br>
            <textarea
                className="border-2 rounded-sm text-black break-words col-span-3 w-full row-span-1 resize-none"
                type="text"
                placeholder="Enter an image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <div className="row-start-5 col-start-1 col-span-2 self-center">
        {name && description && image && <button onClick={handleClick}
        className="
        float-left
        ml-3
        px-10
        py-2
        mb-10
        text-lg
        tracking-wide
        bg-neutral-600
        text-green-300
        rounded-sm
        hover:bg-green-700
        active:bg-green-900">Create Playlist</button>}
        </div>

        <div className="flex row-start-2 row-span-12 col-span-4 text-left">
        <div className="flex-col col-span-8 row-span-3 m-3">
        {image && <img src={image} alt="playlist img" className="rounded-sm"></img>}
        <div className="col-span-6">
            {image && <h1 className="text-3xl font-semibold tracking-wide underline underline-offset-1 mt-2 ">{name}</h1>} 
            {image && <p className="text-s text-green-300 mt-1">{description}</p>}
        </div>
        </div>

        </div>
    </div>
  )
}

export default Create