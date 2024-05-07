import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../shared/Button'
import { Recipe } from '../types';

const EditRecipePage = () => {
  const { recipeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [updatedRecipe, setUpdatedRecipe] = useState<Recipe>(location.state)

  const headerConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const updateRecipe = () => {
    axios.put(`http://localhost:3033/recipes/${recipeId}`, updatedRecipe, headerConfig)
      .then(res => {
        navigate(res.data.redirectUrl)
        // navigate(`/recipes/${recipeId}`)
        // TODO:show success message
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedRecipe(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateRecipe()
  }

  const handleCancel = () => {
    console.log('move to HomePage');
  }

  return (
    <>
      <div>EditRecipePage</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="title"
          value={updatedRecipe.title}
        />
        <input
          type="text"
          onChange={handleChange}
          name="time"
          placeholder="time"
          value={updatedRecipe.time}
        />
        <input
          type="text"
          onChange={handleChange}
          name="difficulty"
          placeholder="difficulty"
          value={updatedRecipe.difficulty}
        />
        <input
          type="text"
          onChange={handleChange}
          name="category"
          placeholder="category"
          value={updatedRecipe.category}
        />
        <input
          type="textarea"
          onChange={handleChange}
          name="description"
          placeholder="description"
          value={updatedRecipe.description}
        />
        <Button type="submit" variant='secondary'>
          Update
        </Button>
        <Button element='link' variant='primary' onClick={handleCancel} href={'/'}>
          Cancel
        </Button>
      </form>
    </>
  )
}

export default EditRecipePage
