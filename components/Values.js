import React from 'react'
import Image from 'next/image';
import v1Image from "../public/assets/v1.svg"
import v2Image from "../public/assets/v2.svg"
import v3Image from "../public/assets/v3.svg"

const Values = () => {
  return (
    <div className='container mx-auto py-20'>
        <p className='text-xl font-medium text-gray-500 text-center'>WHY CHOOSE US</p>
        <p className='text-5xl font-semibold text-gray-500 text-center mt-3'>Our Values</p>
        
        {/* Values Columns */}
        <div className="grid grid-cols-3 gap-16 py-20">
            <div className="flex flex-col gap-5 items-center">
                <Image className='' src={v1Image} alt="First Value" />
                <p className='text-2xl font-semibold'>Personalised lessons</p>
                <p className='text-gray-500 text-center'>Teachers are able to prepare structured lesson plans, using our unique tools that are aimed at fixing the mistakes of each student</p>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <Image className='' src={v2Image} alt="Second Value" />
                <p className='text-2xl font-semibold'>High quality Lesson content</p>
                <p className='text-gray-500 text-center'>Lesson content is optimised for conversation classes and helps students progress quickly. It also makes classes fun and educational at the same time</p>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <Image className='' src={v3Image} alt="Third Value" />
                <p className='text-2xl font-semibold'>Homework tools</p>
                <p className='text-gray-500 text-center'>Students gain access to exercises and tools to help them practise lesson flashcards and homework between classes</p>
            </div>
            
        </div>
    </div>
  )
}

export default Values