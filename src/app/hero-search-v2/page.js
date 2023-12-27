'use client'

import { useState, useEffect } from 'react';
import s from './page.module.css'
import { MdOutlineSearch, MdArrowForward } from "react-icons/md";

import HomeButton from '@/_components/HomeButton'

export default function Page() {

    const [showSearch, setShowSearch] = useState(false)
    // const revealSearch = () => {
    //     if (window.scrollY >= 240) {
    //         setShowSearch(true)
    //     } else {
    //         setShowSearch(false)
    //     }
    // }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const revealSearch = () => {
                if (window.scrollY >= 240) {
                    setShowSearch(true)
                } else {
                    setShowSearch(false)
                }
            }
            
            window.addEventListener('scroll', revealSearch)
    
            return () => {
                window.removeEventListener('scroll')
            }
        }
    }, [])

    // if(typeof window !== 'undefined') {
    // // Your client-side code that uses window goes here
    //     window.addEventListener('scroll', revealSearch)
    // }

    return (
        <div className={s.main}>
            {/* <nav className={s.navigation}> */}
            <nav className={showSearch ? `${s.navigation} ${s.scrolling} ${s.fadeIn}` : s.navigation}>
                <div className={s.navLeft}>
                    <div className={s.logo}/>
                    {
                    showSearch &&
                    <button className={`${s.searchBtn} ${s.fadeIn}`} onClick={() => {console.log("button clicked")}}>
                        search for properties
                        <div className={s.iconContainer}>
                            <MdOutlineSearch className={s.iconSearch}/>
                        </div>
                    </button>
                    }
                    {/* <button className={showSearch ? `${s.searchBtn} ${s.fadeIn}` : `${s.searchBtn} ${s.fadeOut}`} onClick={() => {console.log("button clicked")}}>
                        search for properties
                        <MdOutlineSearch className={s.iconSearch}/>
                    </button> */}
                </div>

                <div className={s.account}>my account</div>
            </nav>
            <section className={s.hero}>
                <h1>let's find you a home</h1>
                <h3>search for something, i don't know</h3>
                <div className={s.search}>
                    <input type="text" name="name" placeholder="City, address, neighbourhood..."/>
                    <button>search</button>
                </div>
                <h4>
                    view listings
                    <MdArrowForward className={s.arrowIcon}/>
                </h4>
            </section>        
            <section className={s.content}></section>
            <section className={s.content}></section>
            <section className={s.content}></section>
            <section className={s.content}></section>
            <section className={s.content}></section>

            <HomeButton/>
        </div>
    )
}