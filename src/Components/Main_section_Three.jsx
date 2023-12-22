import React from 'react'
import image from '../assets/illustration-your-users.svg'

const Main_section_Three = () => {
    return (
        <div id='main-section-3' className=' h-[6`0vh] bg-secondary-200 '>
            <div className='container flex flex-col justify-center items-center md:flex-row '>
                <div className='p-10 flex-1'>
                    <img src={image} alt="grow-image" />
                </div>
                <div className=' p-10 flex-1 md:order-first'>
                    <h2 className='text-center text-2xl text-secondary-100 font-poppins md:text-left md:text-4xl'>
                        Your Users
                    </h2>
                    <p className='mt-5 text-center text-sm text-secondary-100 md:text-left md:text-xl md:max-w-[500px]'>
                        It takes no time at all to integrate Huddle with your all's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main_section_Three