'use client'

import { createContext } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const authContext = createContext();
export default function RootLayout({ children }) {

const value = {
  name: 'shafin'
}

  return (
    <html lang="en">
      <body className={inter.className}>


        <authContext.Provider value = {value}>
          {children}
        </authContext.Provider>



      </body>
    </html>
  )
}