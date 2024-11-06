import React from 'react'
import UserAndAdmin from '../components/UserAndAdmin'
import CreateUserTable from '../components/CreateUserTable'

const Admin = () => {
  return (
    <div>
      <div>
        <h1 className='text-center mt-20 font-bold text-4xl text-gray-700'>Generation Thailand <br /> Home - Admin Sector</h1><br />
      </div>

      <div>
        <UserAndAdmin/>
      </div>

      <div>
        <CreateUserTable/>
      </div>

    </div>
  )
}

export default Admin