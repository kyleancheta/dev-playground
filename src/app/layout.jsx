import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const cssReset = {

// }

export const metadata = {
  title: `kyle's dev playground`,
  description: `just fuckin around and findin out y'know. little web dev experiments for funsies and the piquing of curiosity.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${space_grotesk.variable}`}>
      {/* <body className={space_grotesk.className}> */}
      <body>
        {children}
      </body>
    </html>
  )
}
