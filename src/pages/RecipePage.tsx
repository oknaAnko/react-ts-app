import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const getRecipe = () => {
    axios.get(`http://localhost:3033/recipes/${recipeId}`)
      .then(res => res.data)
      .then(data => setRecipe(data))
  }

  useEffect(() => {
    getRecipe()
  }, [])


  return (
    <>
      <div>RecipePage</div>
      {recipe &&
        <>
          <p>{recipe.title}</p>
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
          <p>{recipe.category}</p>
        </>
      }
    </>
  )
}

export default RecipePage