import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import foodImg from "../assets/foodRecipe.png"
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export const RecipeItems = () => {
  const recipes = useLoaderData()
  const [allRecipes, setAllRecipes] =useState([])
  const [search, setSearch] = useState("")
  let path = window.location.pathname==="/myRecipe" ? true : false
  let pathHome = window.location.pathname==="/" ? true : false
  let user = JSON.parse(localStorage.getItem("user"))
  let favKey = user ? `fav_${user._id}` : "fav"
  let favItems=JSON.parse(localStorage.getItem(favKey)) ?? []
  const [isFav, setIsFav] =useState(false)
  console.log(allRecipes)

  useEffect(() => {
    setAllRecipes(recipes || [])
  },[recipes])


 const onDelete=async(id) => {
    await axios.delete(`http://localhost:5000/recipe/${id}`)
    .then((res) => console.log(res))
    setAllRecipes(recipes=> recipes.filter(recipe=> recipe._id !== id))
   let filterItem=favItems.filter(recipe=>recipe._id !== id)
   localStorage.setItem(favKey, JSON.stringify(filterItem))


 }

const favRecipe=(item) => {
   let filterItem=favItems.filter(recipe=>recipe._id !== item._id)
   favItems =favItems.filter(recipe=>recipe._id === item._id).length===0 ?[...favItems, item] : filterItem
   localStorage.setItem(favKey, JSON.stringify(favItems))
   setIsFav(pre=>!pre)}
   

const filteredRecipes = allRecipes.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase()))

  return (
        <div>
          {(!pathHome) ? "" :<div className="search-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div> }
        <div className='card-container' >
            {filteredRecipes?.map((item, index) => {
                return (
                  
                <div key={index} className='card'>
                  <div className='food-img'>
                 <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px"></img>
                 </div>
                 <div className='card-body'>
                  <div className='title'>{item.title}</div>
                  <div><p className='ins'>{item.instructions}</p></div><br/>
                    <div className='icons'>
                        <div className='timer'><BsFillStopwatchFill />{item.time}</div>
                        {(!path) ? <FaHeart onClick={() => favRecipe(item)}
                        style={{ color: (favItems.some(res => res._id === item._id)) ? "red" : "" }} /> :
                        <div className='action'>
                            <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                            <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon'/>
                        </div>}
                    </div>
                    <br/>
                    <Link to={`/recipe/${item._id}`}><button>See Full Details</button></Link>

                 </div>
                </div>
               
                
            )
            })}
             
        </div>
    
    </div>
  )
}