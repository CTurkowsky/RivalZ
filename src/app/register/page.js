import Link from 'next/link'
export default function RegisterPage() {
  return (
    <div className='min-h-screen flex flex-col animate__animated animate__bounceIn'>
      <div className='container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-transparent border-solid border-2 border-lime-500 px-16 py-16 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center text-white'>REGISTRAR</h1>
          <input
            type='text'
            className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
            name='fullname'
            placeholder='Nombre'
          />
          <input
            type='text'
            className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
            name='fullname'
            placeholder='Apellidos'
          />
          <input
            type='email'
            className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
            name='email'
            placeholder='Correo'
          />
          <input
            type='password'
            className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
            name='password'
            placeholder='Contraseña'
          />
          <input
            type='password'
            className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
            name='confirm_password'
            placeholder='Confirmar Contraseña'
          />
          <button
            type='submit'
            className='w-full text-center py-3 rounded bg-transparent border border-lime-500 text-white hover:bg-lime-700 my-1'
          >
            Crear Cuenta
          </button>
          <Link legacyBehavior href='/login'>
            <a className='text-center block text-white underline hover:text-lime-500 my-3'>
              Ya tengo una cuenta!
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
