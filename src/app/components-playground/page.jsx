// import Link from 'next/link'
import HomeButton from '@/_components/HomeButton'
import TriSwitch from './_components/TriSwitch'
import TriSwitch2 from './_components/TriSwitch2'
import styles from './page.module.css'

export default function ComponentsPlayground() {
  return (
    <main className={styles.main}>
        <section className={`${styles.sectionContainer}`}>
          <div className={`${styles.gridItem}`}></div>
          <div className={`${styles.gridItem}`}>
            <h1 className={styles.heading}>Components Playground</h1>
            <p className={styles.description}>Recreating some components I see around the web.</p>
            </div>
          <div className={`${styles.gridItem}`}></div>
          <div className={`${styles.gridItem}`}>
            <TriSwitch/>
            <p className={styles.body}>My first crack at the Figma toolbar state switcher.</p>
          </div>
          <div className={`${styles.gridItem}`}>
            <TriSwitch2/>
            <p className={styles.body}>My second crack at the Figma toolbar state switcher—motion's hard man, or maybe I'm just dumb.</p>
          </div>
          <div className={`${styles.gridItem}`}></div>
          <div className={`${styles.gridItem}`}></div>
          <div className={`${styles.gridItem}`}></div>
          <div className={`${styles.gridItem}`}></div>
        </section>
        <HomeButton/>
    </main>
  )
}