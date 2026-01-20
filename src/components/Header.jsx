import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll' // Renamed to ScrollLink to avoid confusion
import { useNavigate, useLocation } from 'react-router-dom' // Added Router hooks
import Logo from "./../assets/logo.png"
import { styles } from '../Styles'
import { Twirl as Hamburger } from 'hamburger-react'

// Added 'isPage' to distinguish between scroll sections and actual pages
const NavLinks = [
    { id: "about", title: "About", isPage: false },
    { id: "mission", title: "Features", isPage: false },
    { id: "tech", title: "Technology", isPage: false },
    { id: "products", title: "Products", isPage: false },
    { id: "careers", title: "Careers", isPage: true, path: "/careers" },
]

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [breakpoint])

    return isMobile
}

export default function Header() {
    const isMobile = useIsMobile(768)
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!isMobile) setIsOpen(false)
    }, [isMobile])

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

    const scrollLinkProps = {
        spy: true,
        smooth: true,
        offset: -50,
        duration: 300,
        activeClass: "text-darkprimary font-medium",
        className: "cursor-pointer hover:text-primary transition-colors duration-300"
    }

    const handleNavClick = (link) => {
        setIsOpen(false);

        if (link.isPage) {

            navigate(link.path);
            window.scrollTo(0, 0);
        } else {
            if (location.pathname !== '/') {
                navigate('/', {
                    state: { scrollTo: link.id }
                });
            } else {
                const element = document.getElementById(link.id);
                if (element) {
                    // Using scroller here too keeps behavior consistent
                    // or rely on the <ScrollLink> in the JSX
                }
            }
        }
    }

    return (
        <>
            {isMobile && (
                <div
                    className={`
                    fixed inset-0 bg-black/60 z-40 backdrop-blur-sm
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

                    <div onClick={() => navigate('/')} className="cursor-pointer">
                        <img src={Logo} alt="ZeroCrete" className="w-40 max-w-48 min-w-36" />
                    </div>

                    {/* DESKTOP NAV */}
                    {!isMobile && (
                        <ul className="flex items-center list-none">
                            {NavLinks.map(link => (
                                <li key={link.id} className="mx-4">
                                    {link.isPage || location.pathname !== '/' ? (
                                        // Renders as a standard button/link if it's a Page OR we aren't on Home
                                        <button
                                            onClick={() => handleNavClick(link)}
                                            className={`${scrollLinkProps.className} ${location.pathname === link.path ? "text-darkprimary font-medium" : "text-rawcon"}`}
                                        >
                                            {link.title}
                                        </button>
                                    ) : (
                                        // Renders as a Scroll Link ONLY if on Home Page and targeting a section
                                        <ScrollLink
                                            to={link.id}
                                            {...scrollLinkProps}
                                        >
                                            {link.title}
                                        </ScrollLink>
                                    )}
                                </li>
                            ))}
                            <ScrollLink to='contact' smooth={true} duration={500} className='bg-primary border-primary border rounded-lg text-white py-2 px-4 hover:bg-darkprimary transition duration-150 text-center cursor-pointer'>
                                Contact
                            </ScrollLink>
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
                                        {link.isPage || location.pathname !== '/' ? (
                                            <button
                                                onClick={() => handleNavClick(link)}
                                                className="text-lg font-medium text-slate-700 hover:text-darkprimary block w-full h-full"
                                            >
                                                {link.title}
                                            </button>
                                        ) : (
                                            <ScrollLink
                                                to={link.id}
                                                {...scrollLinkProps}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-medium text-slate-700 hover:text-darkprimary block w-full h-full"
                                            >
                                                {link.title}
                                            </ScrollLink>
                                        )}
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