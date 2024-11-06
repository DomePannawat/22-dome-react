import React from 'react'
import UserAndAdmin from '../components/UserAndAdmin'
import ViewUserTable from '../components/ViewUserTable'

const User = () => {
  return (
    <div>
      <div>
        <h1 className='text-center mt-20 font-bold text-4xl text-gray-700'>Generation Thailand <br /> Home - User Sector</h1><br />
      </div>

      <div>
        <UserAndAdmin/>
      </div>

      <div>
        <ViewUserTable />
      </div>
    </div>
  )
}

export default User