import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import { RecipeItems } from '../components/RecipeItems';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Model from '../components/Model';
import InputForm from '../components/InputForm';
import { MdWavingHand } from "react-icons/md";
import backOne from "../assets/back-1.jpg"
import backTwo from "../assets/back-2.jpg"
import backThree from "../assets/back-3.jpg"
import Throught from '../components/throught';



const Home =() => {
  let user = JSON.parse(localStorage.getItem("user"))
  let path = window.location.pathname==="/myRecipe" ? true : false
  let pathHome = window.location.pathname==="/" ? true : false
  

const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false)
const addRecipe = () =>{
    let token = localStorage.getItem("token")
    if(token)
  navigate("/addRecipe")
else{
    setIsOpen(true)
}
}

    return (
        <div className='home-container'>
            <section className='home' style={{backgroundImage: `url(${(path) ? backTwo: (pathHome) ? backOne : backThree})`}}>
                <div className='left'>
                    <p className='purpose'>Adventure <br/>of <span>Delicacies</span></p>

                    {/* <p className='showName'><MdWavingHand className='waveHand'/> Hi {user?.email ? `${user?.email}` : ""}</p> */}
                    <h5>Unlock a world of variety culinary recipes and unleash<br/>your inner chef the easy way with foodRecipe</h5>
                    <button onClick={addRecipe}>Share your recipe</button>
                </div>


                <div className='right'>
                    {/* <img src={foodRecipe} width="320px" height="300px"></img> */}
                </div>
            </section>
            
            
        { (isOpen) && <Model onClose= {() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)}/></Model>}

       <div className='recipe'>
        {(pathHome) ? <Throught /> : ""}
        <div className='card-des'>
            <h1>Become a true <span>chef</span><br/>with our recipes.</h1>
            <p>We are a home to variety of recipes <br/>worldwide for you to learn.</p>
        </div>
        <div className='card-topic'>
            <h1>{(path) ? "My Recipes" : (pathHome) ? "Explore Recipes" : "Favourite Recipes"}</h1>
        </div>
        <RecipeItems />
        </div>     
                
        </div>
    )
}

export default Home;
