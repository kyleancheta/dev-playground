'use client'

// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MdHome } from "react-icons/md";
import styles from './HomeButton.module.css'

export default function HomeButton({ top }) {
  const router = useRouter()
  return (
    <button className={`${styles.main} ${top ? styles.top : null}`} onClick={() => router.push('/', { scroll: boolean })}>
        <MdHome className={styles.icon}/>
    </button>
  )
}

