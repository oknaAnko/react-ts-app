import React, { useState } from 'react';
import axios from "axios";
import Button from '../shared/Button';
import { Recipe } from '../types';

const CreateRecipePage = () => {

  const [newRecipe, setNewRecipe] = useState<Recipe>({
    title: '',
    time: '',
    difficulty: '',
    category: '',
    description: ''
  })

  console.log('newRecipe', newRecipe);

  const headerConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const addRecipe = () => {
    axios.post('http://localhost:3033/recipes', newRecipe, headerConfig)
      .then(res => {
        console.log('res', res.data)
        // TODO: redirect & show success message
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewRecipe(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRecipe()
  }

  const handleCancel = () => {
    console.log('move to HomePage');
  }

  return (
    <>
      <div>CreateRecipePage</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="title"
        />
        <input
          type="text"
          onChange={handleChange}
          name="time"
          placeholder="time"
        />
        <input
          type="text"
          onChange={handleChange}
          name="difficulty"
          placeholder="difficulty"
        />
        <input
          type="text"
          onChange={handleChange}
          name="category"
          placeholder="category"
        />
        <input
          type="textarea"
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <Button type="submit" variant='secondary'>
          Create
        </Button>
        <Button element='link' variant='primary' onClick={handleCancel} href={'/'}>
          Cancel
        </Button>
      </form>
    </>

  )
}

export default CreateRecipePage