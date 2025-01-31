import React from 'react'
import Welcome from '../components/home/Welcome'
import ProtectedRoute from '../components/signIn/ProtectedRoute'

const Home = () => {
  return (
    <div>

      <ProtectedRoute>
           <Welcome />
      </ProtectedRoute>
      
    </div>
  )
}

export default Home
