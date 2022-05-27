import {useState} from 'react'

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

    <div className="h-screen bg-neutral-800 text-green-300">
        <form onSubmit={handleSubmit}>
        <label className="font-bold px-1">Username:&nbsp;
        <input
          className="border-2 rounded-md"
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
          className="border-2 rounded-md"
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
  )
}

export default Login