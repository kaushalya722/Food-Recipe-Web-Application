import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GetRecipeById = () => {

const { id } = useParams()
const [recipe, setRecipe] = useState(null)

  useEffect(() => {

    const getRecipe = async () => {
      // try {
      //  const res = await axios.get(`http://localhost:5000/recipe/${id}`)
      //  setRecipe(res.data)
      // } catch (error) {
      //   console.log(error)
      // }
      await axios.get(`http://localhost:5000/recipe/${id}`)
      .then(response => {
         let res = response.data
         setRecipe({
          title:res.title,
          ingredients:res.ingredients.join(","),
          instructions:res.instructions,
          time:res.time,
          coverImage:res.coverImage
         })
      })
    }
  getRecipe()

  }, [id])


  if (!recipe) {
    return <h2>Loading...</h2>
  }


  return (
    <div className="recipe-details">
    <div className='bg'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbe2d2" fill-opacity="1" d="M0,224L15,192C30,160,60,96,90,106.7C120,117,150,203,180,218.7C210,235,240,181,270,160C300,139,330,149,360,170.7C390,192,420,224,450,224C480,224,510,192,540,176C570,160,600,160,630,181.3C660,203,690,245,720,229.3C750,213,780,139,810,101.3C840,64,870,64,900,106.7C930,149,960,235,990,224C1020,213,1050,107,1080,90.7C1110,75,1140,149,1170,186.7C1200,224,1230,224,1260,213.3C1290,203,1320,181,1350,176C1380,171,1410,181,1425,186.7L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
</div>
    <div className='right'>
      <h1>{recipe.title}</h1>
      <div className='rest'>
      <p><strong>Time:</strong> {recipe.time}</p><br/>

      <h3>Ingredients:</h3>

      <p>{recipe.ingredients}</p><br/>

      <h3>Instructions:</h3>

      <p>{recipe.instructions}</p>
    </div>
    </div>
    <div className='left'>
      {/* <div className='image-dec'> */}
      <img
        src={`http://localhost:5000/images/${recipe.coverImage}`}
        width="400px"
        alt={recipe.title}/>
    </div>
    {/* </div> */}

    
    </div>
  )
}

export default GetRecipeById;

