'use client'
import Image from 'next/image'

export default function ViewPost({ event }) {
  return (
    <div className='text-white text-center bg-transparent p-8 rounded-lg shadow-lg flex flex-col items-center justify-center animate__animated animate__fadeInDown'>
      <h2 className='text-3xl font-bold mb-4'>{event.title}</h2>
      <p className='text-gray-300'>{event.date}</p>
      <div className='mt-4 flex justify-center'>
        <Image src={event.img} alt={event.title} className='rounded-lg shadow-md' width={1400} height={800} />
      </div>
      <p className='text-lg mt-8 mb-4 text-justify' style={{maxWidth: '1400px'}}>{event.description}</p>
    </div>
  )
}