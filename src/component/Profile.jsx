import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import imgPng from '../assets/image/female.png';
import { displaySingleUser, editUser } from '../../services/allApi';
// import { data } from 'react-router-dom';

 

const Profile = () => {
  const [open, setOpen] = useState(false);
  const[profileData,setProfileData]=useState({})
  const[editedResponse,setEditedResponse]=useState({})
  const[userProfile,setUserProfile]=useState({
    gitlink:editedResponse.gitlink,
    linkedln:editedResponse.linkedln,
    proimage:"",

  })
  console.log(editedResponse);
  
    useEffect(()=>{
      displaySingleUserDetails()
    },[])
  const updateTheUser=async()=>{
    let token=sessionStorage.getItem("token")
    if(token){
      if(userProfile.gitlink&&userProfile.linkedln&&userProfile.proimage){
        let reqHeaders={
          "Authorization":`Bearer ${token}`,
          "Content-Type":"multipart/form-data"
        }
        let payload=new FormData()
        payload.append("gitlink",userProfile.gitlink)
        payload.append("linkedln",userProfile.linkedln)
        payload.append("proimage",userProfile.proimage)
        let apiresponse=await editUser(payload,reqHeaders)
        console.log(apiresponse);
        
        if(apiresponse.status==200){
          setEditedResponse(apiresponse.data)
       alert("updated successfull")
        }else{
          alert("something went wrong")
        }

      }else{
        alert("please fill the form")
      }

    }else{
      alert("please login")
    }
  }

  const displaySingleUserDetails=async()=>{
  const token=sessionStorage.getItem("token")
  if(token){
    try{
      let reqHeaders={
        "Authorization":`Bearer ${token}`
      }
      let apiresponse=await displaySingleUser(reqHeaders)
      setProfileData(apiresponse.data)

    }catch(err){
      alert(err)
    }

  }else{
    alert("please login")
  }
    
  }
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
            <label  onChange={(e)=>(setUserProfile({...userProfile,proimage:e.target.files[0]}))}>
              <input type='file' style={{display:"none"}}></input>
              <img src={imgPng} alt=""  width={"150px"} height={"150px"} className='img-fluid rounded-circle mb-2'/>
            </label>
           
              <input type='text' placeholder='user github link ' className='form-control mb-2'
              onChange={(e)=>(setUserProfile({...userProfile,gitlink:e.target.value}))}
              ></input>
              <input type='text' placeholder='user linkedln link ' className='form-control mb-2'
               onChange={(e)=>(setUserProfile({...userProfile,linkedln:e.target.value}))}
              ></input>
              <button className='btn btn-primary w-100 rounded mt-3'
              onClick={updateTheUser}>
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
