import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { Col, Row } from 'react-bootstrap'
import CardProject from '../component/CardProject'
import { getAllProjects } from '../../services/allApi'



const Projects = () => {
  const[getProject,setgetProject]=useState([])

  useEffect(()=>{
    viewAllProducts()
  },[])



  const viewAllProducts=async()=>{

   let token=sessionStorage.getItem("token")
   if(token){
    try{
    let headers={
      "Authorization":`Bearer ${token}`
      
    }
  
      let apiresponse=await getAllProjects(headers)
      if(apiresponse.status==200){
        setgetProject(apiresponse.data)
      }
      else{
        alert(apiresponse.data)
      }
      
    }catch(err){
      alert(err)
    }
   }
   else{
    alert("please login")
   }



   
  }
  return (
    <div>
      <Header />
     <div className="container-fluid">
     <div  className="d-flex justify-content-between mt-5">
    
    <h2>All projects</h2>
  <input  className=" form-control w-25" placeholder='Search project by language'></input>
   

  </div>
  <div>
    <Row>{
      getProject?.length>0?(
        getProject?.map((a,index)=>(
          <Col key={index} sm={12} md={6} lg={4}>
          <CardProject project={a}/>
          </Col>
        ))

      ):<div>
        <p>NOT found</p>
      </div>
      }


    
    </Row>

  </div>
     </div>
      
    </div>
  )
}

export default Projects
