import React, { useEffect } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userName = userInfo?.fullname || 'User';

  const isAdmin = userInfo?.role?.admin === true;
  // const isSubscriber = userInfo?.role?.subscriber === true;

  useEffect(() => {
//   if (isAdmin) {
//   navigate('/user/dashboard')
// } else if (isSubscriber) {
//   navigate('/user/profile');
// } else {
//   navigate('/')
// }
    if (!isAdmin) {
      navigate('/user/profile');
    }
     
  }, [isAdmin, navigate]);

  if (isAdmin) {
     navigate('/user/dashboard');
  } 

  return (
    <div className='welcome-page tw-p-6'>
      <h1 className='tw-text-3xl tw-font-bold tw-mb-4'>Welcome, {userName}!</h1>
      <p className='tw-text-lg tw-mb-6'>
        You are now logged into the dashboard. Here's what you can do:
      </p>

      {/* Statistics or Additional Info */}
      <div className='tw-mt-8 mb-4'>
        <h2 className='tw-text-2xl tw-font-bold tw-mb-4'>Quick Stats</h2>
        <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4'>
          <div className='tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <p className='tw-text-gray-600'>Total Blogs</p>
            <p className='tw-text-2xl tw-font-bold'>25</p>
          </div>
          <div className='tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <p className='tw-text-gray-600'>Total Users</p>
            <p className='tw-text-2xl tw-font-bold'>120</p>
          </div>
          <div className='tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <p className='tw-text-gray-600'>Active Offers</p>
            <p className='tw-text-2xl tw-font-bold'>5</p>
          </div>
          <div className='tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <p className='tw-text-gray-600'>Pending Tasks</p>
            <p className='tw-text-2xl tw-font-bold'>3</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className='tw-mt-8 my-4'>
        <div className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6'>
          <div className='tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <BarChart />
          </div>
          <div className='tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <LineChart />
          </div>{' '}
        </div>
      </div>

      {/* Quick Links */}
      <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6'>
        <Link
          to='/user/blogs'
          className='tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md tw-text-center hover:tw-shadow-lg tw-transition-shadow'
        >
          <h2 className='tw-text-xl tw-font-semibold tw-mb-2'>Manage Blogs</h2>
          <p className='tw-text-gray-600'>
            Create, edit, or delete blog posts.
          </p>
        </Link>
        <Link
          to='/user/users'
          className='tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md tw-text-center hover:tw-shadow-lg tw-transition-shadow'
        >
          <h2 className='tw-text-xl tw-font-semibold tw-mb-2'>Manage Users</h2>
          <p className='tw-text-gray-600'>View and manage user accounts.</p>
        </Link>
        <Link
          to='/user/profile'
          className='tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md tw-text-center hover:tw-shadow-lg tw-transition-shadow'
        >
          <h2 className='tw-text-xl tw-font-semibold tw-mb-2'>Settings</h2>
          <p className='tw-text-gray-600'>
            Update your profile and preferences.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
