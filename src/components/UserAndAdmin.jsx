import React from 'react'
import { NavLink } from 'react-router-dom'

const UserAndAdmin = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <NavLink to="/user">
          <button className='bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black rounded-lg mr-20 mt-5'>User Home Sector</button>
        </NavLink>

        <NavLink to="/admin">
          <button className='bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black rounded-lg mt-5'>Admin Home Sector</button>
        </NavLink>

      </div>
    </div>
  )
}

export default UserAndAdmin