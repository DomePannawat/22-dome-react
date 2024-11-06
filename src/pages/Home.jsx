import React from 'react'
import UserAndAdmin from '../components/UserAndAdmin'

const Home = () => {

  return (
    <div>
      <div>
        <h1 className='text-center mt-20 font-bold text-4xl text-gray-700'>Generation Thailand <br /> React - Assessment</h1><br />
      </div>

      <div>
        <UserAndAdmin />
      </div>

    </div>
  )
}

export default Home