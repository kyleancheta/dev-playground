'use client'

// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MdHome } from "react-icons/md";
import styles from './HomeButton.module.css'

export default function HomeButton() {
  const router = useRouter()
  return (
    <button className={styles.main} onClick={() => router.push('/')}>
        <MdHome className={styles.icon}/>
    </button>
  )
}

