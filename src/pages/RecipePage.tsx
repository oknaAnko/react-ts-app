import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../shared/Button';
import { Recipe } from '../types';

const RecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
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
          <p>{recipe.description}</p>
        </>
      }
      <Button variant='primary' onClick={() => navigate(`/recipes/${recipeId}/edit`, { state: recipe })} >
        Edit
      </Button>
      <Button variant='primary' onClick={() => navigate('/')}>
        Cancel
      </Button>
    </>
  )
}

export default RecipePage
