import { React } from 'react'
import Image from 'next/image'
import logoImage from "../public/assets/logo.png"


const Navbar = () => {
    return (
        <div className=''>
            <div className="flex justify-between items-center">
                <Image className='w-64 px-5' src={logoImage} alt="Logo" />
                <div className="flex items-center gap-14">
                    <p>Home</p>
                    <p>Our teachers</p>
                    <p>How it works</p>
                </div>
                <button className="btn bg-white text-blue-300 border-none px-5 hover:bg-blue-400 hover:text-white capitalize rounded-full">
                    Get Started
                </button>
            </div>
        </div>   
    )
}

export default Navbar 