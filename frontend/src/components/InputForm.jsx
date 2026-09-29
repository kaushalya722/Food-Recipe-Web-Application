import React, { useState } from 'react'
import axios from "axios"


const InputForm = ({setIsOpen}) => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isSignUp, setIsSignUp] = useState(false)
const [error, setError] = useState("")

    const handleOnSubmit = async (e) => {
         e.preventDefault()
         let endpoint = (isSignUp) ? "signUp" : "login"
         await axios.post(`http://localhost:5000/${endpoint}`, {username, email, password})
         .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setIsOpen()
         })
         .catch(data => setError(data.response?.data?.error) )
    }
  return (
    <div>
        <form className='form' onSubmit={handleOnSubmit}>
            {(isSignUp) ? <div className='form-control'>
                <label>Username</label>
                <input type='text' className='input' required onChange={(e) => setUsername(e.target.value)}></input>
            </div> : " "}
            <div className='form-control'>
                <label>Email</label>
                <input type='email' className='input' required onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' className='input' required onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type='submit'>{(isSignUp) ? "Sign Up" : "Login"}</button><br></br>
            {(error != "") && <h6 className='error'>{error}</h6>}
            <p onClick={()=> setIsSignUp(pre => !pre)}>{(isSignUp) ? "Already have an account" : "Create new account"}</p>
        </form>
    </div>
  )
}
export default InputForm;
