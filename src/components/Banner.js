import React, { useState } from 'react'

import discount from '../assests/discount.jpg'

import black from '../assests/black.jpg'

import banner1 from '../assests/Grey Brown Minimalist Summer season collections Banner Landscape (2).png'

import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'


const Banner = () => {
    const data = [banner1, discount, black];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }
    console.log(currentSlide)



    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img className='w-screen h-full object-cover' src={data[0]} alt="imageone" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[1]} alt="imageone" loading='priority' />
                    <img className='w-screen h-full object-cover' src={data[2]} alt="imageone" loading='priority' />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><HiArrowLeft /></div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><HiArrowRight /></div>
                </div>
            </div>
        </div>
    )
}

export default Banner
