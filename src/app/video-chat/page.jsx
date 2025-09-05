'use client'

import { useState, useEffect } from 'react';
import HomeButton from '@/_components/HomeButton'
import style from './page.module.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MdLocalPhone, MdOutlineVideocam, MdOutlineVideocamOff, MdMic, MdMicOff, MdInfoOutline } from "react-icons/md";

const inter = Inter({ subsets: ['latin'] })


export default function Page() {

    return (
        <main className={`${inter.className} ${style.main}`}>
            <div className={style.container}>
                <div className={style.attendees}>
                    <div className={style.attendeeVideo}>
                        <Image
                            src="/img/sandy.jpg"
                            width={1920}
                            height={1080}
                            alt="Sandy Cheeks"
                        />
                        <p>Sandy</p>
                    </div>
                    <div className={style.attendeeVideo}>
                        <Image
                            src="/img/spongebob-patrick.jpg"
                            width={1002}
                            height={718}
                            alt="Spongebob Squarepants and Patrick Star"
                        />
                        <p>Spongebob and Patrick</p>
                    </div>
                </div>
                <div className={style.user}>
                    <div className={style.userVideo}>
                        <p>You</p>
                    </div>
                </div>
                <div className={style.controls}>
                    <button className={style.infoButton}><MdInfoOutline/></button>
                    <div className={style.mainControls}>
                        <button className={style.controlButton}><MdOutlineVideocam/></button>
                        <button className={style.controlButton}><MdMic/></button>
                    </div>
                    <button className={style.callButton}><MdLocalPhone/></button>
                </div>
            </div>
            {/* <HomeButton/> */}
        </main>
    )
}