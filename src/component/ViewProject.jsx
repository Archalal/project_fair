import React from 'react'
import AddProject from '../component/AddProject'
import EditProject from './EditProject'

const ViewProject = () => {
  return (
    <div>
      <div className="  d-flex justify-content-between">
        <h2 className='text-warning'>All Projects</h2>
         <AddProject />
      </div>
      <div className="mt-2">
        <div className="border shadow rounded d-flex justify-content-between p-2">
          <h4>Title</h4>
          <div className='d-flex'>
            <div >
              <EditProject />
            </div>
            <div className='btn'>
             <a  target='_blank' href="https://github.com/Archalal/mediaPlayer"><i class="fa-brands fa-github"></i></a>
            </div>
                  <button className='btn text-danger'><i class="fa-solid fa-trash"></i></button>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProject
