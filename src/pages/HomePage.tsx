import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../shared/Button'
import { Recipe } from '../types'

// const defaultRecipes: Recipe[] = [
//   {
// id: "",
//     title: 'Cupcakes',
//     time: '20 min',
//     difficulty: 'easy',
//     category: 'sweets',
//     description: 'lorem ipsum...'
//   }
// ]

const HomePage = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([])
  // console.log('recipes', recipes);

  const getRecipes = () => {
    axios.get('http://localhost:3033/recipes')
      .then(res => res.data)
      .then(data => setRecipes(data))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <>
      <div>HomePage</div>
      {recipes.map(recipe => (
        <>
          <Button element='link' variant='primary' onClick={() => navigate(`/recipes/${recipe._id}`)} >
            {recipe.title}
          </Button>
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
          <p>{recipe.category}</p>
        </>
      ))}
    </>
  )
}

export default HomePage
