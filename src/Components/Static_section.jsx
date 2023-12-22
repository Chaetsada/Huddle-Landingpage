import React from 'react'
import communities from '../assets/icon-communities.svg'
import messages from '../assets/icon-messages.svg'
const Static_section = () => {
    return (
        <div id='static-section' className='mt-10 h-[40vh] '>
            <div className='container mx-auto flex flex-col gap-10 items-center md:justify-around md:flex-row'>
                <div>
                    <img className='w-[35px]' src={communities} alt="icon-communities" />
                    <h2 className='my-2 text-6xl font-poppins text-secondary-100 md:text-7xl'>1.4k+</h2>
                    <span className='text-sm text-slate-400 md:text-xl'>Communities Formed</span>
                </div>
                <div>
                    <img className='w-[35px] items-start' src={messages} alt="icon-communities" />
                    <h2 className='my-2 text-6xl font-poppins text-secondary-100 md:text-7xl'>2.7m+</h2>
                    <span className='block max-w-[80px] mx-auto text-center text-sm text-slate-400 md:max-w-[150px] md:text-xl'>Messages Sent</span>
                </div>
            </div>
        </div>
    )
}

export default Static_section