import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ManyNavigation } from './components/ManyNavigation'
import Home from './pages/Home'
import axios from 'axios'
import AddFoodRecipe from './pages/AddFoodRecipe'
import EditRecipe from './pages/editRecipe'
import GetRecipeById from './pages/GetRecipeById'

const getAllRecipes = async () =>  {
  let allRecipes =[]
  await axios.get('http://localhost:5000/recipe').then(res => {
    allRecipes = res.data;
  })
  return allRecipes;
}

const getMyRecipe=async () => {
  let user=JSON.parse(localStorage.getItem("user"))
  let allRecipes=await getAllRecipes()
  return allRecipes.filter(item => item.createdBy===user._id)
}

const getFavRecipes=()=>{
  const user = JSON.parse(localStorage.getItem("user"))
  if(!user) 
    return []
  const favKey = `fav_${user._id}`
  return JSON.parse(localStorage.getItem(favKey)) ?? []
}

const router = createBrowserRouter([
  {path:"/", element:<ManyNavigation/>, 
    children:[
       {path:"/", element:<Home/>, loader:getAllRecipes},
       {path:"/myRecipe", element:<Home/>, loader:getMyRecipe},
       {path:"/favRecipe", element:<Home/>, loader:getFavRecipes},
       {path:"/addRecipe", element:<AddFoodRecipe/>},
       {path:"/editRecipe/:id", element:<EditRecipe/>},
       {path:"/recipe/:id", element:<GetRecipeById/>},
  ]
}
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;