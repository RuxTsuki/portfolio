'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import "./Header.css";
import { basePath, idAbout, idHero, idProjects, idTechSkills } from '@/constants';
import TsukiiLogo from '@/assets/svg/tsukiilogo.svg';
import CloseSvg from '@/assets/svg/close.svg';
import MenuSvg from '@/assets/svg/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ needBg = false }) => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);
    const router = useRouter();

    // on render, set listener
    useEffect(() => {

        if (window.scrollY >= 100)
            setSticky(true);

        const isSticky = () => {
            /* Method that will fix header after a specific scrollable */
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 100;
            setSticky(stickyClass);
        };
        window.addEventListener("scroll", isSticky);
        return () => window.removeEventListener("scroll", isSticky);
    }, []);

    const goToSection = (id: string) => {
        setNavbar(false);
        /* 
        
        aca
        
        */
        router.push(`${basePath}/#${id}`);
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView();
        }
    }

    const itemsMenu = [
        {
            title: "Inicio",
            id: idHero
        },
        {
            title: "Sobre mi",
            id: idAbout
        },
        {
            title: "Técnologías",
            id: idTechSkills
        },
        {
            title: "Proyectos",
            id: idProjects
        }
    ];

    return (
        <div className='relative'>
            <nav className={`'w-full fixed z-10 w-full`}>
                <div className={`w-full ${navbar ? 'h-screen' : ''}`}>

                    <div className={`${sticky && !navbar ? 'navbar-bg ' : ''} relative z-20 `}>
                        <div className={`w-full ${needBg && !navbar ? 'bg-black' : ''}`}>
                            <div className="container mx-auto flex items-center justify-between py-3 px-3 md:py-4">
                                <Link className='cursor-pointer' href={`${basePath}/#${itemsMenu[0].id}`}>
                                    <Image priority width={60} height={60} src={TsukiiLogo} alt="logo of Tsukii" />
                                </Link>

                                <div className='hidden md:flex'>
                                    <ul className="font-menu-d font-medium flex gap-[1.25rem]">
                                        {itemsMenu.map((item, idx: number) =>
                                            <li key={idx} onClick={() => goToSection(item.id)}>
                                                <p>
                                                    {item.title}
                                                </p>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <Image width={36} height={36} src={CloseSvg} alt="close icon" />
                                        ) : (
                                            <Image width={36} height={36} src={MenuSvg} alt="open icon" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`${navbar ? "grid" : "hidden"} md:hidden animated fixed z-10 top-0 bottom-0 left-0 right-0`}>
                        <div
                            className={`grid items-center bg-[#0e0e0e] w-full`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                {itemsMenu.map((item, idx: number) =>
                                    <li key={idx} onClick={() => goToSection(item.id)}>
                                        <p className='text-[#fff] text-[1.25rem] cursor-pointer'>
                                            {item.title}
                                        </p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
