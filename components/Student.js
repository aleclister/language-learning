import React from 'react'
import Image from 'next/image';
import studentImage from "../public/assets/student.svg"
import italyImage from "../public/assets/italy.svg"

const Student = () => {
  return (
    <div className='container mx-auto'>

        {/* Title */}
        <p className="text-gray-500 text-2xl font-semibold uppercase">
            What they say
        </p>
        <p className="text-gray-500 text-2xl font-medium capitalize">
            Our students
        </p>

        <div className="flex items-center justify-between">
            <Image src={studentImage} alt="Student" />
            <div className="flex flex-col gap-5 items-start max-w-sm">
                <p className='text-3xl text-semibold'>
                    Matthew Waterloo
                </p>
                <div className="flex items-center gap-2">
                    <Image src={italyImage} alt="Italian Language" />
                    <p className='text-gray-500'>Italian Student</p>
                    <p>This was an amazing experience to be able to converse face-to-face with some one in Italian. I had to improve my language skills for work and this is exactly what I needed! Within a month, I was speaking fluently!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Student