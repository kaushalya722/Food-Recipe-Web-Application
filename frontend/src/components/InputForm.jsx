import React, { useState } from 'react'
import axios from "axios"


const InputForm = ({setIsOpen}) => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isSignUp, setIsSignUp] = useState(false)
const [error, setError] = useState("")

    // const handleOnSubmit = async (e) => {
    //      e.preventDefault()
    //      let endpoint = (isSignUp) ? "signUp" : "login"
    //      await axios.post(`http://localhost:5000/${endpoint}`, {username, email, password})
    //      .then((res) => {
    //         localStorage.setItem("token", res.data.token)
    //         localStorage.setItem("user", JSON.stringify(res.data.user))
    //         setIsOpen()
    //      })
    //      .catch(data => setError(data.response?.data?.error) )
    // }

    const handleOnSubmit = async (e) => {
  e.preventDefault();
  setError("");

  const endpoint = isSignUp ? "signup" : "login";

  try {
    const res = await axios.post(
      `http://localhost:5000/${endpoint}`,
      { username, email, password }
    );

    if (isSignUp) {
      // Account created successfully.
      // Show the login form instead of closing the modal.
      setIsSignUp(false);
      setUsername("")
      setEmail("")
      setPassword("");
      setError("");
      return;
    }

    // Save authentication data only after successful login.
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Close the authentication modal after login.
    setIsOpen();
  } catch (err) {
    setError(
      err.response?.data?.error ||
      "Something went wrong. Please try again."
    );
  }
};

  return (
    <div>
        <form className='form' onSubmit={handleOnSubmit}>
            {(isSignUp) ? <div className='form-control'>
                <label>Username</label>
                <input type='text' className='input' value={username} required onChange={(e) => setUsername(e.target.value)}></input>
            </div> : " "}
            <div className='form-control'>
                <label>Email</label>
                <input type='email' className='input' value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' className='input' value={password} required onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type='submit'>{(isSignUp) ? "Sign Up" : "Login"}</button><br></br>
            {(error != "") && <h6 className='error'>{error}</h6>}
            <p onClick={()=> setIsSignUp(pre => !pre)}>{(isSignUp) ? "Already have an account" : "Create new account"}</p>
        </form>
    </div>
  )
}
export default InputForm;
