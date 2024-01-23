import Image from 'next/image'

export default function Gallery() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      <div>
        <Image
          src='https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_1280.jpg'
          alt='Imagen 1'
          width={500}
          height={300}
          className='w-full h-auto'
        />
      </div>
      <div>
        <Image
          src='https://cdn.pixabay.com/photo/2015/09/09/17/18/stadium-931975_1280.jpg'
          alt='Imagen 2'
          width={500}
          height={300}
          className='w-full h-auto'
        />
      </div>
      <div>
        <Image
          src='https://cdn.pixabay.com/photo/2013/02/24/22/36/fc-red-bull-arena-85865_1280.jpg'
          alt='Imagen 3'
          width={500}
          height={300}
          className='w-full h-auto'
        />
      </div>
      <div>
        <Image
          src='https://cdn.pixabay.com/photo/2014/06/22/12/30/goal-374490_1280.jpg'
          alt='Imagen 4'
          width={500}
          height={300}
          className='w-full h-auto'
        />
      </div>
    </div>
  )
}
