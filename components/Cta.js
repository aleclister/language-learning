import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 lg:mt-10 items-center justify-center'>
        {/* Title */}
        <p className="text-base lg:text-xl font-medium text-gray-500 uppercase gap-3">
        Get Your
        </p>
        <p className="text-2xl lg:text-5xl font-semibold text-gray-500 capitalize">
            Free Trial Lesson Today!
        </p>

        <button className="btn bg-[#524fd5] text-white rounded-full border-none w-60 lg:w-96">
            Get Started
        </button>

    </div>
  )
}

export default Cta