import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll' // Import Link from react-scroll
import Logo from "./../assets/logo.png"
import { styles } from '../Styles'
import { Twirl as Hamburger } from 'hamburger-react'

const NavLinks = [
    { id: "mission", title: "Features" },
    { id: "tech", title: "Technology" },
    { id: "products", title: "Products" },
    { id: "contact", title: "Contact" },
]

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
        handleResize() // Check on mount
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [breakpoint])

    return isMobile
}

export default function Header() {
    const isMobile = useIsMobile(768)
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Close mobile menu when switching to desktop
    useEffect(() => {
        if (!isMobile) setIsOpen(false)
    }, [isMobile])

    // Add shadow to navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Common props for the Link component to avoid repetition
    const linkProps = {
        spy: true,           // Update active class on scroll
        smooth: true,        // Enable smooth scrolling
        offset: -60,         // Offset for the sticky header height
        duration: 500,       // Scroll duration
        activeClass: "text-emerald-600 font-medium", 
        className: "cursor-pointer hover:text-emerald-500 transition-colors duration-300"
    }

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isMobile && (
                <div
                    className={`
                    fixed inset-0 bg-black/60 z-40 backdrop-blur-xs
                    transition-opacity duration-300 ease-out
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                    onClick={() => setIsOpen(false)}
                />
            )}

            <header
                className={`
                    fixed top-0 left-0 w-full py-2 md:py-3 z-50 transition-all duration-300 bg-white
                    ${scrolled ? 'shadow-md border-b-0' : 'border-b border-slate-200'}
                `}
            >
                <div className={`${styles.SectionWidth} flex justify-between items-center`}>

                    {/* Logo - Scroll to top when clicked */}
                    <a href="/"  className="cursor-pointer">
                        <img src={Logo} alt="ZeroCrete" className="w-40 max-w-48 min-w-36" />
                    </a>

                    {/* DESKTOP NAV */}
                    {!isMobile && (
                        <ul className="flex items-center list-none">
                            {NavLinks.map(link => (
                                <li key={link.id} className="mx-4">
                                    <Link
                                        to={link.id}
                                        {...linkProps}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                           
                        </ul>
                    )}

                    {/* MOBILE NAV TOGGLE */}
                    {isMobile && (
                        <>
                            <div className="z-50">
                                <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
                            </div>

                            <ul
                                className={`
                                fixed left-0 top-16 w-full bg-white border-b border-t border-slate-200
                                flex flex-col items-center list-none pb-8 shadow-xl
                                transition-all duration-300 ease-out z-40
                                ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
                            `}
                            >
                                {NavLinks.map(link => (
                                    <li key={link.id} className="w-full text-center p-4 border-b border-slate-50 last:border-none">
                                        <Link
                                            to={link.id}
                                            {...linkProps}
                                            onClick={() => setIsOpen(false)} // Close menu on click
                                            className="text-lg font-medium text-slate-700 hover:text-emerald-600 block w-full h-full"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                </div>
            </header >
        </>
    )
}