'use client'
import { useState } from 'react'
import Link from 'next/link'

//TODO: Agregar color cuando se esta en la pagina

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex items-center justify-between flex-wrap bg-transparent p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-2xl tracking-tight'>RivalZ</span>
      </div>
      <div className='block lg:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 border rounded text-white hover:text-lime-500 hover:border-white'
        >
          <svg
            className='fill-current h-4 w-4'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? '' : 'hidden lg:flex'
        }`}
      >
        <div className='text-lg lg:flex-grow'>
          <Link legacyBehavior href='/'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-500 mr-4'>
              Inicio
            </a>
          </Link>
            <Link legacyBehavior href='events/list'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-500 mr-4'>
              Eventos
            </a>
          </Link>
        </div>
        <div className='text-lg ml-auto'>
          <Link legacyBehavior href='/login'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-500 mr-4'>
              Iniciar Sesion
            </a>
          </Link>
          <Link legacyBehavior href='/register'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-500 mr-4'>
              Registrar
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
