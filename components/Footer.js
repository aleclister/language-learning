import React from 'react'
import Image from 'next/image'
import logoImage from "../public/assets/logo.png"
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="container mx-auto mt-20 mb-10">
        <div className="bg-gray-100 grid grid-cols-5 gap-10 p-10 rounded-3xl items-start">
            <div className="space-y-5">
                <Image className='w-64' src={logoImage} alt="Logo" />
                <p>178 Kings Road, London, United Kingdom</p>
            </div>
            <div className="space-y-5">
                <p className='text-xl font-medium'>Company</p>
                <p className='text-base'>Teachers</p>
                <p className='text-base'>Careers</p>
                <p className='text-base'>Support</p>
                <p className='text-base'>Contact</p>
            </div>
            <div className="space-y-5">
                <p className='text-xl font-medium'>Product</p>
                <p className='text-base'>Lessons</p>
                <p className='text-base'>Pricing</p>
                <p className='text-base'>Blog</p>
            </div>
            <div className="space-y-5">
                <p className='text-xl font-medium'>Legal</p>
                <p className='text-base'>Terms and Conditions</p>
                <p className='text-base'>Privacy Policy</p>
            </div>
            <div className="flex items-center gap-5">
                <BsFacebook className='text-3xl text-gray-500'/>
                <BsTwitter className='text-3xl text-gray-500'/>
                <BsInstagram className='text-3xl text-gray-500'/>
            </div>
        </div>
    </div>
  )
}

export default Footer