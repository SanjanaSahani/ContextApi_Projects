import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
   
    return (

        <div className=" text-xl mt-6">
            <h2 className="text-2xl items-center mb-4 font-bold">Login</h2>
            <input className="border-2 mr-6"
             type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value) }
                placeholder="Username" />
            <input className="border-2"
            type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                placeholder="Password" />
                <br />
            <button className="mt-4" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;