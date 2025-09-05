'use client'

import Link from 'next/link'
// import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.titleSection}>
        <h1 className={styles.title}>dev playground</h1>
        <h3 className={styles.subtitle}>
          my little sandbox on the internet to fuck around and find out; trying my best to be a design engineer—it's hard out here. made by me, <a href="https:///www.kyleancheta.com" target="_blank">kyle</a>.
        </h3>
      </section>
      <ul className={styles.list}>
        {/* <li className={styles.item}><Link href="/test">test</Link></li>
        <li className={styles.item}><Link href="/hero-search">hero search</Link></li>
        <li className={styles.item}><Link href="/hero-search-v2">hero search v2</Link></li> */}
        <li className={styles.item}><Link href="/wcag-148">WCAG: 1.4.8.</Link></li>
        <li className={styles.item}><Link href="/components-playground">Components Playground</Link></li>
        {/* <li className={styles.item}><Link href="/video-chat">Video Chat</Link></li> */}
      </ul>
    </main>
  )
}
