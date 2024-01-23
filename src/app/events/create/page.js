import Link from 'next/link'

export default function CreateEventPage() {
  return (
    <div>
      <div className='min-h-screen flex flex-col'>
        <div className='container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-transparent border-solid border-2 border-lime-500 px-16 py-16 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center text-white'>
              CREAR EVENTO
            </h1>
            <input
              type='email'
              className='block bg-transparent text-white border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              placeholder='Nombre del evento'
            />
            <label className='text-white mb-2'>Fecha del evento:</label>
            <input
              type='date'
              className='block bg-transparent text-white border border-grey-light w-full p-4 rounded mb-4'
              name='date'
            />
            <textarea
              type='text'
              className='block bg-transparent text-white border border-grey-light w-full p-3 rounded mb-4'
              name='description'
              placeholder='Descripcion del evento'
            />
            <div className='relative'>
              <button
                type='button'
                className='block bg-transparent text-white border border-sky-500 w-full p-4 rounded mb-4 cursor-pointer'
              >
                Seleccionar imagen
              </button>
              <input
                type='file'
                className='absolute top-0 left-0 opacity-0 cursor-pointer'
                name='img'
                placeholder='Imagen del evento'
              />
            </div>
            <Link
              type='submit'
              href='/events/list'
              className='w-full text-center py-3 rounded bg-transparent border border-lime-500 text-white hover:bg-lime-700 my-1'
            >
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
