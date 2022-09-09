import React from 'react'

const  MenuList = () => {
  return (
    <div className='flex felx-col w-full'>
        <div className='w-full'>
            <div className='text-center font-bold text-orange-500 p-3 hover:bg-gray-900 mt-2 bg-gray-800 text-1xl rounded-lg'>Menu Items</div>
            <ul>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Mutton Item</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Chicken Item</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Egg Item</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Momo</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Nuddles</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Dosa</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Chat</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Sweets</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Cold Drink</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Cake</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Bear</li>
                <li className='text-center font-bold text-white p-2 hover:bg-gray-600 bg-gray-800 mt-1 text-semibold first-letter:text-green-600 rounded-md'>Manchurian</li>
            </ul>
        </div>
    </div>
  )
}

export default MenuList