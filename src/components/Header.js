import React from 'react'
import { cart7, userlogo } from '../assests';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
  const productData = useSelector((state) => state.shopoholics.productData);
  const userInfo = useSelector((state) => state.shopoholics.userInfo);
  return (
    <div className='w-full h-20  bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <div>
            <p className='w-28 font-bold text-2xl italic text-black-600 shadow-md'>Shopoholics</p>

          </div>
        </Link>
        <div className='flex items-center gap-8'>
          <Link to="/cart">
            <div className='relative'>
              <img className='w-6' src={cart7} alt="cartimage" />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
            </div>
          </Link>
          <Link to="/login">
            <img className="w-8 h-8 rounded-full" src={userInfo
              ? userInfo.image : userlogo} alt="userimage" />
          </Link>
          {
            userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Header
