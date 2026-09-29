import React, { useEffect, useState } from 'react'
import Model from './Model';
import InputForm from './InputForm';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("token")
  const [isLogin, setIsLogin] = useState(token ? false : true)
  let user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    setIsLogin(token ? false : true)
  },[token])

const checkLogin = () => {
  if(token){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLogin(true)
  }else{
    setIsOpen(true)
  }
  
}

  return (
    <div>
        <header>
            <h2 className='productName'>food<span>Recipes</span></h2>
                <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/myRecipe" : "/"}>MY RECIPES</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/favRecipe" : "/"}>FAVOURITES</NavLink></li>
                <li onClick={checkLogin}><p className='login'>{ (isLogin)? "LOGIN": "LOGOUT" }</p></li>
            </ul>

        
        </header>
        { (isOpen) && <Model onClose= {() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)}/></Model>}
    </div>
  )
}