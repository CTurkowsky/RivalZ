import Gallery from '@/components/ui/Gallery'
import About from '@/components/ui/About'
import Table from '@/components/ui/Table'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='h-[80vh] w-full flex items-center justify-center bg-cover'>
        <div className='text-center text-white'>
          <h1 className='text-6xl mb-4 animate__animated animate__heartBeat'>
            Bienvenido
          </h1>
          <p className='text-xl'>
            Unete al mejor sitio para afisionados al deporte!
          </p>
          <div className='mt-8'>
            <Link legacyBehavior href='/login'>
              <a className='inline-block bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-black'>
                Iniciar sesión
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#84cc16" fill-opacity="1" d="M0,288L120,245.3C240,203,480,117,720,122.7C960,128,1200,224,1320,272L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
      </div>
      <About />
      <div className='flex text-white space-x-8'>
        <div className='w-1/2'>
          <Table title='Tabla de Puntaje' />
        </div>
        <div className='w-1/2'>
          <Table title='Tabla de Posiciones' />
        </div>
      </div>
        <Gallery />
    </>
  )
}
