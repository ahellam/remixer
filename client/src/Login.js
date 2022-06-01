import {useState} from 'react'
import Spinner2 from './Spinner2';


function Login({setUser, setIsAuthenticated}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState([])

  function handleSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }

      fetch(`http://localhost:3000/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user =>{
            setUser(user)
            setIsAuthenticated(true)
          })

        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }

  return (
    <div>
    <div className=" bg-neutral-800 p-2 rounded-sm grid grid-cols-12 m-1">
      <h1 className=" tracking-wide text-green-300 text-4xl p-1 col-span-2 text-center font-medium">R <span className="font-semibold text-green-400">E </span>
        <span className="font-semibold text-green-500">M <span className="font-semibold text-green-600">I </span> X </span>
        <span className="font-semibold text-green-400">E </span>R 
      </h1>
    <div className="bg-neutral-800 text-green-300 col-span-6 col-start-7 text-right p-2 tracking-wide">
        <form onSubmit={handleSubmit}>
        <label className="font-bold px-1">Username:&nbsp;
        <input
          className="border-2 border-green-500 rounded-sm bg-neutral-800"
          name="user[email]"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        </label>

        <label className="font-bold px-1">Password:&nbsp;
        <input
          className="border-2 border-green-500 rounded-sm bg-neutral-800"
          name="user[password]"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </label>

        <button
          className=" 
      bg-neutral-600
      text-green-300 
      px-3
      py-1
      rounded-sm
      mx-1
      hover:bg-green-700
      active:bg-green-900
      "
          type="submit"
        >
          Log In
        </button>
        </form>
    </div>
    </div>
      <div className="bg-neutral-800 h-screen m-1 grid grid-cols-6 grid-rows-2">
        <div className="col-start-3 col-span-2 mt-5">
          <Spinner2/>
        </div>
      </div>
      </div>
  )
}

export default Login