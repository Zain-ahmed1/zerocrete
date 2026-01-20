import React from 'react'
import herobgImg from "./../assets/hero-img.png"
import { styles } from '../Styles'
import { Link } from 'react-scroll'

export default function Hero() {
    return (
        <>
            <div
                className="w-full relative bg-cover bg-center h-125 md:h-150 flex justify-center mt-8"
                style={{ backgroundImage: `url(${herobgImg})` }}
            >
                <div className={`${styles.SectionWidth} flex flex-col justify-center items-start`}>
                    <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-concrete tracking-tight mb-6">
                        Concrete Without <br/><span className="text-primary">Carbon.</span>
                    </h1>

                    <p className=" max-w-xl mx-0 text-[16px] md:text-xl text-rawcon mb-6">
                        Building tomorrow today: Zero-carbon concrete made from industrial byproducts.
                    </p>

                    <div className='flex md:flex-row flex-col justify-start items-center gap-4 w-full'>
                        <Link to='products' smooth={true} duration={500} className='bg-primary border-primary border rounded-lg text-white py-3 hover:bg-darkprimary transition duration-150 w-full md:w-48 block text-center cursor-pointer'>
                            View Applications
                        </Link>
                        <Link to='tech' smooth={true} duration={500} className='bg-transparent text-primary border-2 border-primary rounded-lg py-3 hover:text-darkprimary hover:border-darkprimary transition duration-150 block md:inline text-center w-full md:w-48 cursor-pointer'>
                            Our Technology
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
