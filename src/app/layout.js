import Navbar from '@/components/ui/Navbar'
import './globals.css'
import Footer from '@/components/ui/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>RivalS</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
