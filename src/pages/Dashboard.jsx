import React from 'react'
import Header from '../component/Header'
import Profile from '../component/Profile'
import ViewProject from '../component/ViewProject'



const Dashboard = () => {

 
  return (
    <div>
      <Header insideDashboard={true} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
          <h3>Welcome <span className='text-primary'>User</span>,</h3>
          <ViewProject/>
          </div>
          <div className="col-lg-4">
          <Profile />
          </div>
        </div>
      
       
      </div>

      
    </div>
  )
}

export default Dashboard
