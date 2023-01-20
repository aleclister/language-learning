import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';

const MoreInfoModal = () => {
  const info =[
    {
      title: 'How do I find a teacher?',
      des: 'Find a teacher by viewing their profiles and checking other student reviews. Teachers offer 50-minute lessons and some even offer 30-minute lessons.',
    },
    {
      title: 'What should I prepare for my lesson?',
      des: 'When you schedule a lesson your teacher will be notified and they will start preparing your homework. Your teacher will send you an email when your homework is ready. The homework will also become visible on your home page',
    },
    {
      title: 'How do I start a lesson?',
      des: 'When it is time to start your lesson go to your student homepage and enter the class to view the lesson content. You will also need to open Zoom so that your teacher is able to call you',
    },
    {
      title: 'What other benefits does Chatabee give you?',
      des: 'Gain access to free monthly articles, Receive progress reports from your teacher, Use our flashcard review tool to help improve your mistakes outside the class.',
    },
    {
      title: 'What is the Trial lesson?',
      des: 'Once you have created an account, you can then book your first 30min trial lesson at a heavily reduced price. With this you can get a feel for how your lessons are structured and you get to meet the teacher you have chosen.',
    },
    {
      title: 'How is Chatabee different from other services?',
      des: 'We are very different from other language learning services because we offer all of our teachers and students access to thousands of pieces of learning materials to succesfully build a great lesson plan every time!',
    }
  ]

  return (
    <div className="container mx-auto py-20">

      {/* Title */}
      <p className="text-xl font-medium text-gray-500 uppercase gap-3">
        More Info
      </p>
      <p className="text-5xl font-semibold text-gray-500 capitalize">
        Common questions
      </p>
      
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:gap-10">
        {info.map((inf,i)=>{
          return(
            
            <Disclosure key={i} >
              {({ open }) => (
                <div className="flex flex-col">
                  <Disclosure.Button className="flex flex-col w-full justify-between rounded-full bg-purple-100 px-8 py-4  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className="flex justify-between items-center w-full">
                      <span>{inf.title}</span>
                      <BsFillPlusCircleFill
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </div>
                    
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {inf.des}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            
          )       
        })}

      </div>
    </div>
  )
}

export default MoreInfoModal
