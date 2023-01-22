import { React } from 'react'
import Image from 'next/image'
import logoImage from "../public/assets/logo.png"
// import Script from "../styles/script"



const Navbar = () => {
    return (
        <div className=''>
            <div className="flex flex-col gap-5 md:justify-between items-center md:flex-row">
                <Image className='w-64 px-5' src={logoImage} alt="Logo" />

                <div className="hidden md:flex flex-col gap-5 md:justify-between items-center md:flex-row">
                    <a href="/">Home</a>
                    <a href="#">Our teachers</a>
                    <a href="#">How it works</a>
                </div>
                <button className="btn hidden md:block bg-white text-blue-300 border-none px-5 hover:bg-blue-400 hover:text-white capitalize rounded-full">
                    Get Started
                </button>
                
                {/* Hamburger Menu */}
                <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                    
                </button>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div id="menu" class="absolute flex-col items-center self-end hidden py-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <a href="#">Home</a>
                        <a href="#">Our Teachers</a>
                        <a href="#">How it works</a>
                    </div>
                </div>
            </div>
        </div>   
    )
}


// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })


export default Navbar 