import React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '../shared/Button'
export { }

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-24">
      <div className="flex w-20 mx-auto my-0 text-sm border border-solid border-red-600">
        <Button className="" variant='primary' onClick={() => navigate('/')}>
          Home
        </Button>
        <Button variant='primary' onClick={() => navigate('/new')}>
          Create
        </Button>
      </div>
    </section>
  )
}

export default Navbar