import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaHome } from 'react-icons/fa';
import { BsPaypal, BsPersonFill, } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <Link to="/">
                        <p className='w-28 font-bold text-2xl italic text-purple-600 shadow-md'>Shopoholics</p>
                    </Link>
                    <p>© 2023 Shopoholics. All rights reserved.</p>
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <NavLink to="https://github.com/niyatijain1">
                            <FaGithub className='hover:text-white duration-300 cursor-pointer' />
                        </NavLink>
                        <NavLink to="https://www.facebook.com/niyati.jain.944/">
                            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
                        </NavLink>
                        <NavLink to="https://twitter.com/niyatijain_">
                            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        </NavLink>
                        <NavLink to="http://www.linkedin.com/in/niyati-jain-25293b233">
                            <FaLinkedin className='hover:text-white duration-300 cursor-pointer' />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/__niyatijain_/">
                            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                        </NavLink>

                    </div>
                </div>
                <div >
                    <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>Sant vihar, Meerut</p>
                        <p>India.</p>
                        <p>Phone: 7409811439</p>
                        <p>Email: jainniyati17@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill /></span>{" "} my account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>{" "} checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>{" "} order tracking</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>{" "} help & support</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
                    <button className='text-sm border text-white border-t-0 hover: bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                </div>


            </div>

        </div>
    )
}

export default Footer
