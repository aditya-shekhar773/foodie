import React from 'react'

const  Header = () => {
  return (
    <div className=" sticky top-0 flex bg-orange-400 w-full p-4 justify-center font-bold">
        <div className=" w-1/2 ml-7 first-letter:text-gray-200 first-letter:text-3xl first-letter:bg-gray-600 first-letter:px-4 first-letter:py-1 first-letter:rounded-full text-2xl text-bold">Aditya Restonrent</div>
        <ul className='flex w-2/4 p-2 space-x-5 text-1xl ml-12'>
            <li className='flex'>Menu</li>
            <li className='flex'>Review</li>
            <li className='flex'>Location</li>
            <li className='flex'>About</li>
            <button> <li className=' text-center  text-white p-1 hover:bg-gray-600 bg-gray-800 text-semibold  rounded-md'>Order Online</li></button>
        </ul>
        <button className='w-12 h-12 mr-12'>
          <img src="mode.png"  className='' alt="" />
        </button>
    </div>
  )
}

export default Header
