import { shortenText } from '@/utils/shortenText'
import Image from 'next/image'
import Link from 'next/link'

export default function EventPost({ event }) {
  return (
    <div
      key={event.id}
      className='w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center items-center'
    >
      <div className='ax-w-sm shadow dark:bg-transparent dark:border-lime-700 animate__animated animate__backInUp'>
        <div className='flex flex-col items-start'> 
          <a href={`view/${event.id}`}>
            <Image
              className='mt-4'
              src={event.img}
              alt={event.title}
              width={500}
              height={500}
              priority
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {event.title}
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {event.date}
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify'>
              {shortenText(event.description, 100)}
            </p>
            <Link
              href={`view/${event.id}`}
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-600 rounded-lg hover:bg-lime-800'
            >
              Leer mas
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}