import React from 'react'
import Image from 'next/image';
import studentImage from "../public/assets/student.svg"
import italyImage from "../public/assets/italy.svg"

const Student = () => {
  return (
    <div className='container mx-auto mt-20'>

        {/* Title */}
        <p className="text-xl font-medium text-gray-500 uppercase">
            What they say
        </p>
        <p className="text-5xl font-semibold text-gray-500 mt-3 capitalize">
            Our students
        </p>

        {/* Image and Description */}
        <div className="flex items-center justify-between mt-5">
            <Image src={studentImage} alt="Student" />
            <div className="flex flex-col gap-5 items-start max-w-sm">
                <p className='text-4xl text-semibold'>
                    Matthew Waterloo
                </p>
                <div className="flex items-center gap-2">
                    <Image src={italyImage} alt="Italian Language" />
                    <p className='text-gray-500'>Italian Student</p>
                </div>
                <p className='text-2xl'>This was an amazing experience to be able to converse face-to-face with some one in Italian. I had to improve my language skills for work and this is exactly what I needed. Within a month, I was speaking fluently!</p>
            </div>
        </div>
    </div>
  )
}

export default Student