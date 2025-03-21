import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import imgPng from '../assets/image/female.png';

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="d-flex  justify-content-between">
        <h3 className='text-primary'>Profile</h3>
        <button className='btn' onClick={()=>setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
      </div>
      <div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="d-flex flex-column  align-items-center shadow m-2">
            <label>
              <input type='file' style={{display:"none"}}></input>
              <img src={imgPng} alt=""  width={"150px"} height={"150px"} className='img-fluid rounded-circle mb-2'/>
            </label>
           
              <input type='text' placeholder='user github link ' className='form-control mb-2'></input>
              <input type='text' placeholder='user linkedln link ' className='form-control mb-2'></input>
              <button className='btn btn-primary w-100 rounded mt-3'>
                update
              </button>
           
           
          </div>
        </div>
      </Collapse>
      </div>
      
    </div>
  )
}

export default Profile
