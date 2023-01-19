import React from "react";
import Navbar from "./Navbar";
import Image from 'next/image';
import heroImage from "../public/assets/hero.png"

const Hero = () => {
    return (
        <div className=" mx-6 my-6">
            <div className="bg-[#fff5f1] px-16 py-10 rounded-3xl">
                <Navbar />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-10">
                        <p className="text-6xl pt-16 font-medium">
                            A unique approach <br /> to learning foreign <br /> languages online
                        </p>
                        <p className="text-lg text-gray-500"> We offer online conversation classes that are <br/>personalised to fit your needs.
                        </p>
                        <button className="btn bg-[#524fd5] text-white rounded-full border-none w-44">
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