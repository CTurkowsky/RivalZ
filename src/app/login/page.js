import Link from 'next/link'
export default function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col animate__animated animate__bounceIn'>
      <div className='container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-transparent border-solid border-2 border-lime-500 px-16 py-16  rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center text-white'>
            INICIAR SESION
          </h1>
          <input
            type='text'
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
          <Link
            type='submit'
            href='/'
            className='w-full text-center py-3 rounded bg-transparent border border-lime-500 text-white hover:bg-lime-700 my-1'
          >
            Ingresar
          </Link>
          <div className='text-center text-white text-sm mt-4'>
            <a href='#' className='no-underline text-lime-500 hover:text-lime-700'>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Link legacyBehavior href='/register'>
            <a className='text-center block text-white underline hover:text-lime-500 my-3'>
              No tengo una cuenta!
            </a>
          </Link>
        </div>
      </div>

  
    </div>
  )
}
