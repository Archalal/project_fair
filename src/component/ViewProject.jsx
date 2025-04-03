import React, { useContext, useEffect, useState } from 'react'
import AddProject from '../component/AddProject'
import EditProject from './EditProject'
import { getUserSpecified } from '../../services/allApi'
import { addProjectContext } from '../context/ProjectContext'




const ViewProject = () => {

  const[addProjectResponse,setProjectResponse]=useContext(addProjectContext)


  const[projectData,setProjectData]=useState([])
  useEffect(()=>{
    getUserProject()
  },[addProjectResponse])

  const getUserProject=async()=>{

    let token=sessionStorage.getItem("token")
    if(token){

    try{
      let headers={
        "Authorization":`Bearer ${token}`
      }
      let apiResponse=await getUserSpecified(headers)
      console.log(apiResponse);
      
      if(apiResponse.status==200){
        setProjectData(apiResponse.data)
        console.log(apiResponse.data);
        
      }else{
        console.log(apiResponse.data);
        
      }
    }
    catch(err){
      console.log(err);
      
    }

    }else{
      alert("please login")
    }



  }
  return (
    <div>
      <div className="  d-flex justify-content-between">
        <h2 className='text-warning'>All Projects</h2>
         <AddProject />
      </div>
      {
        projectData?.map((a,index)=>(
            <div key={index} className="mt-2">
        <div className="border shadow rounded d-flex justify-content-between p-2">
          <h4>{a.projectTitle}</h4>
          <div className='d-flex'>
            <div >
              <EditProject />
            </div>
            <div className='btn'>
             <a  target='_blank' href={a.projectGitLink}><i class="fa-brands fa-github"></i></a>
            </div>
                  <button className='btn text-danger'><i class="fa-solid fa-trash"></i></button>
        
          </div>
        </div>
      </div>

        ))
      }
    
    </div>
  )
}

export default ViewProject
