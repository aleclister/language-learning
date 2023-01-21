import React from 'react'
import Image from 'next/image';
import t1Image from "../public/assets/t1.svg"
import t2Image from "../public/assets/t2.svg"
import t3Image from "../public/assets/t3.svg"
import italyImage from "../public/assets/italy.svg"
import ukImage from "../public/assets/uk.svg"
import spainImage from "../public/assets/spain.svg"

const Teachers = () => {
  return (
    <div className='container mx-auto'>
        <p className='text-base lg:text-xl font-medium text-gray-500'>Staff</p>
        <p className='text-3xl lg:text-5xl font-semibold text-gray-500 mt-3'>Meet Our Teachers</p>
        
        {/* Teachers Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 lg:gap-16 lg:py-16">

            <div className="flex flex-col items-center gap-5">
                <Image src={t1Image} alt="First Value" />
                <p className='text-xl lg:text-2xl font-semibold'>Thomas Zona</p>
                <div className="flex items-center gap-2">
                    <Image src={italyImage} alt="Italian Language" />
                    <p className='text-gray-500'>Italian Teacher</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <Image src={t2Image} alt="First Value" />
                <p className='text-2xl font-semibold'>Emily Wilson</p>
                <div className="flex items-center gap-2">
                    <Image src={spainImage} alt="Spanish Language" />
                    <p className='text-gray-500'>Spanish Teacher</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <Image src={t3Image} alt="First Value" />
                <p className='text-2xl font-semibold'>Henry Button</p>
                <div className="flex items-center gap-2">
                    <Image src={ukImage} alt="English Language" />
                    <p className='text-gray-500'>English Teacher</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teachers