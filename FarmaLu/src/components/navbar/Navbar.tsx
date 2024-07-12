import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <Link to='/home' className='text-white hover:underline'>FarmaLu</Link>
          </div>
          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastro' className='hover:underline'>Cadastrar Categorias</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
