'use client'
import ViewPost from '@/components/ui/ViewPost'
import { useState, useEffect } from 'react'

export default function View({ params }) {
  const { id } = params
  const [event, setEvent] = useState(null)
  const [events, setEvents] = useState([
   {
      id: 1,
      title: 'Evento de prueba',
      description: 'Descripción del evento 1 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      date: '2022-01-01',
      img: 'https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg',
    },
    {
      id: 2,
      title: 'Evento 2',

      description: 'Descripción del evento 2 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      date: '2022-02-01',
      img: 'https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg',
    },
    {
      id: 3,
      title: 'Evento 3',
      description: 'Descripción del evento 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      date: '2022-02-01',
      img: 'https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg',
    },
    {
      id: 4,
      title: 'Evento 4',
      description: 'Descripción del evento 4 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      date: '2022-02-01',
      img: 'https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg',
    },
    {
      id: 5,
      title: 'Evento 2',

      description: 'Descripción del evento 5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      date: '2022-02-01',
      img: 'https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg',
    },
  ])


  useEffect(() => {
    const post = events.find((event) => event.id === parseInt(id))
    setEvent(post)
  }, [id, events])

  if (!event) {
    return <div>Loading...</div>
  }

  return <ViewPost event={event} />
}