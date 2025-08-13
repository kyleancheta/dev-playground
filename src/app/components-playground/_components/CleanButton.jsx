import { Inter } from 'next/font/google'
import { main } from './CleanButton.module.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function CleanButton({ children, ...props}) {
  return (
    <button className={`${main} ${inter.variable}`} {...props}>
        {children}
    </button>
  )
}