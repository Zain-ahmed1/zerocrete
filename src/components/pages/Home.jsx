import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Hero from './../Hero'
import Features from './../Features'
import Technology from './../Technology'
import Products from './../Products'
import Roadmap from './../Roadmap'
import About from '../About'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.scrollTo) {

            scroller.scrollTo(location.state.scrollTo, {
                duration: 0,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -50,
            })

            window.history.replaceState({}, document.title)
        }
    }, [location])

    return (
        <>
            <Hero />
            <About />
            <Features />
            <Technology />
            <Roadmap />
            <Products />
        </>
    )
}

export default Home