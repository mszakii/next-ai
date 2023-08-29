import '@styles/globals.css'
import { Children } from 'react'

export const metadata = {
  "title": "Promptopia",
  "description": "Discover and share AI prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className="app">{children}</main>
    </html>
  )
}

export default RootLayout
