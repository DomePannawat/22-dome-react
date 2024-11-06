import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-sky-200 p-4'>
      <ul className='flex justify-end'>
        <li>
          <NavLink to="/" className="text-gray-700 mr-10 font-bold">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/owner" className="text-gray-700 mr-8 font-bold">
            Owner
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar