import Link from 'next/link'
import HomeButton from '@/_components/HomeButton'

export default function Test() {
  return (
    <div>
        This is a test page.
        <Link href="/">Home</Link>
        <HomeButton/>
    </div>
  )
}