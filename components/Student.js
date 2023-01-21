import React from 'react'
import Image from 'next/image';
import studentImage from "../public/assets/student.svg"
import italyImage from "../public/assets/italy.svg"

const Student = () => {
  return (
    <div className='container mx-auto mt-20'>

        {/* Title */}
        <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
            What they say
        </p>
        <p className="text-3xl lg:text-5xl font-semibold text-gray-500 mt-3 capitalize">
            Our students
        </p>

        {/* Image and Description */}
        <div className="flex flex-col gap-6 md:justify-between pt-10 lg:pt-16 items-center md:flex-row">
            <Image className='max-w-sm' src={studentImage} alt="Student" />
            <div className="flex flex-col gap-5 items-start max-w-sm">
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-semibold'>
                    Matthew Waterloo
                </p>
                <div className="flex items-center gap-2">
                    <Image src={italyImage} alt="Italian Language" />
                    <p className='text-gray-500'>Italian Student</p>
                </div>
                <p className='text-base sm:text-lg md:text-xl'>This was an amazing experience to be able to converse face-to-face with some one in Italian. I had to improve my language skills for work and this is exactly what I needed. Within a month, I was speaking fluently!</p>
            </div>
        </div>
    </div>
  )
}

export default Student