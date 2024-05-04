import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import CreateRecipePage from './pages/CreateRecipePage';
import EditRecipePage from './pages/EditRecipePage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import RecipePage from './pages/RecipePage'
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="recipes/:recipeId" element={<RecipePage />} />
            <Route path="recipes/:recipeId/edit" element={<EditRecipePage />} />
            <Route path="new" element={<CreateRecipePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
