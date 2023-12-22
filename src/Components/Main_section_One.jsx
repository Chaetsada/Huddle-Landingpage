import React from 'react'
import image from '../assets/illustration-grow-together.svg'

const Main_section_One = () => {
    return (
        <section id='main-section-1' className='pt-[100px]  h-[70vh] bg-secondary-200 '>
            <div className='container flex flex-col justify-center items-center md:flex-row '>
                <div className='p-10 flex-1'>
                    <img src={image} alt="grow-image" />
                </div>
                <div className=' p-10 flex-1 md:order-first'>
                    <h2 className='text-center text-2xl text-secondary-100 font-poppins md:text-left md:text-4xl'>Grow Together</h2>
                    <p className='mt-5 text-center text-sm text-secondary-100 md:text-left md:text-xl md:max-w-[500px]'>
                        Generate meaningful discussions with your audience and build a strong, loyal community. 
                        Think of the insightful conversations you miss out on with a feedback form. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main_section_One