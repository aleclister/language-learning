import React from "react";
import Navbar from "./Navbar";
import Image from 'next/image';
import heroImage from "../public/assets/hero.png"

const Hero = () => {
    return (
        <div className=" mx-6 my-6">
            <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
                {/* <Navbar /> */}
                <div className="flex flex-col gap-5 md:justify-between items-center md:flex-row">
                    <div className="flex flex-col gap-5  md:gap-10">
                        <p className="text-2xl pt-16 font-medium lg:text-6xl sm:text-4xl md:text-5xl">
                            A unique approach <br /> to learning foreign <br /> languages online
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-500"> We offer online conversation classes that are <br className="md:flex hidden"/>personalised to fit your needs.
                        </p>
                        <button className="btn btn-sm md:btn-md bg-[#524fd5] text-white rounded-full border-none capitalize md:w-44">
                            Get Started
                        </button>
                    </div>
                    <Image className='w-96' src={heroImage} alt="Language Student" />
                </div>
            </div>
        </div>
    )
}

export default Hero