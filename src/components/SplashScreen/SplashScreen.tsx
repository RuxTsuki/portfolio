"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import TsukiiLogo from '@/assets/svg/tsukiilogo.svg';


export const SplashScreen = () => {

    const [isFinishSplash, setIsFinishSplash] = useState(false);

    useEffect(() => {
        const animate = () => {
            setTimeout(() => {
                setIsFinishSplash(true);
                document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
            }, 400);
        }

        animate();
    }, []);

    return (
        <>
            <div className={`w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[100] bg-[#000] ${isFinishSplash ? 'hidden' : ''}`} >
                <div className='w-full h-screen grid place-items-center'>
                    <Image priority width={100} height={100} src={TsukiiLogo} alt="logo of Tsukii" />
                </div>
            </div>
        </>
    )
}
