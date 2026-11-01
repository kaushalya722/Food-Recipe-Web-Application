import React, { useEffect, useState } from 'react'
import Model from './Model';
import InputForm from './InputForm';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("token")
  const [isLogin, setIsLogin] = useState(token ? false : true)
  let user = JSON.parse(localStorage.getItem("user"))
  const [menuOpen, setMenuOpen] = useState(false);

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
        <header className='navbar'>
            <h2 className='productName'>food<span>Recipes</span></h2>
                <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/myRecipe" : "/"} onClick={() => setMenuOpen(false)}>MY RECIPES</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/favRecipe" : "/"} onClick={() => setMenuOpen(false)}>FAVOURITES</NavLink></li>
                <li onClick={() => {
                  checkLogin();
                  setMenuOpen(false);
                }}><p className='login'>{ (isLogin)? "LOGIN": "LOGOUT" }</p></li>
            </ul>

            <button 
            className='menu-button' 
            onClick={()=> setMenuOpen(!menuOpen)} 
            aria-label='Toggle navigation menu'
            aria-expanded={menuOpen}>
              {menuOpen ? <HiX />: <HiMenu />}
            </button>

        
        </header>
        { (isOpen) && <Model onClose= {() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)}/></Model>}
    </div>
  )
}