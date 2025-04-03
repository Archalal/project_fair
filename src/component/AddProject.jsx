import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import projectimg from '../assets/image/project.png'
import { addProject } from '../../services/allApi';
import { addProjectContext } from '../context/ProjectContext';




const AddProject = () => {

  const [show, setShow] = useState(false);

  const[addProjectResponse,setProjectResponse]=useContext(addProjectContext)

  const handleClose = () => {
    clearContent()
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const[imgTypeStatus,setImgTypeStatus]=useState(false)


  const[projectData,setProjectData]=useState({
    projectImg:"",
    projectTitle:"",
    projectLanguage:"",
    projectOverView:"",
    projectGitLink:"",
    projectWebsiteLink:""

  })

  const[preview,setPreview]=useState()

  useEffect(()=>{
    if(projectData.projectImg){
      console.log(projectData.projectImg.type);
      

      if(projectData.projectImg.type=="image/jpeg" || projectData.projectImg.type=="image/png"||projectData.projectImg.type=="image/jpeg"){
        setImgTypeStatus(true)
      
      
        setPreview(URL.createObjectURL(projectData.projectImg))

      }
      else{
        setImgTypeStatus(false)
        alert("enter the img format(jpeg,png,jpg)")
      }

    
    }
  },[projectData.projectImg])

  const clearContent=()=>{
    setProjectData(
      {
      projectImg:"",
      projectTitle:"",
      projectLanguage:"",
      projectOverView:"",
      projectGitLink:"",
      projectWebsiteLink:""
      }
    )

    setPreview("")
    setImgTypeStatus(false)
  }


  const onSubmit = async() => {
    console.log(projectData)
    if (projectData.projectGitLink && projectData.projectImg && projectData.projectLanguage && 
        projectData.projectOverView && projectData.projectTitle && projectData.projectWebsiteLink) {

        const payload = new FormData();
        payload.append("projectImg", projectData.projectImg);
        payload.append("projectTitle", projectData.projectTitle);
        payload.append("projectLanguage", projectData.projectLanguage);
        payload.append("projectOverview", projectData.projectOverView);
        payload.append("projectGitLink", projectData.projectGitLink);
        payload.append("projectWebsiteLink", projectData.projectWebsiteLink);

        let token = sessionStorage.getItem("token");
        if (token) {
            let requestHeaders = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            };
         try {
          let apiresponse=await addProject(payload,requestHeaders)
          if(apiresponse.status==201){
            setProjectResponse(apiresponse.data)
            alert("successfully created")
            handleClose()
          }
          else{
            console.log(apiresponse.data);
            
          }
         console.log(apiresponse);
         } catch (error) {
          console.log(error)
         }
         
        } else {
            alert("missing token");
        }
    } else {
        alert("fill the form");
    }
};




  return (
    <div>

      <button className='btn btn-primary' onClick={handleShow}>
      <i class="fa-solid fa-plus"></i>AddProjects
      </button>
      <Modal
      size='lg'
      centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="row">
        <div className="col-lg-4">
        <label>
        <input type='file' style={{display:"none"}}
        onChange={((e)=>(setProjectData({...projectData,projectImg:e.target.files[0]})))} />
        <img src={preview?preview:projectimg} alt="" className='img-fluid' />
        </label>
        {
          !imgTypeStatus?<p className='fw-bolder text-warning'>
          Upload only the following files type (JPEG,PNG,JPG)here !!!
        </p>:""
        }
        </div>
        <div className="col-lg-8">
          <input onChange={(e)=>(setProjectData({...projectData,projectTitle:e.target.value}))} type="text"  placeholder='project title ' className='form-control mt-2'/>
          <input onChange={(e)=>(setProjectData({...projectData,projectLanguage:e.target.value}))}  type="text"  placeholder='Language ' className='form-control mt-3'/>
          <input onChange={(e)=>(setProjectData({...projectData,projectOverView:e.target.value}))}  type="text"  placeholder='OverView ' className='form-control mt-3'/>
          <input onChange={(e)=>(setProjectData({...projectData,projectGitLink:e.target.value}))}  type="text"  placeholder='Project gitHub Link ' className='form-control mt-3'/>
          <input onChange={(e)=>(setProjectData({...projectData,projectWebsiteLink:e.target.value}))}  type="text"  placeholder='project Website Link ' className='form-control mt-3'/>
        </div>

      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    
      
    </div>
  )
}

export default AddProject
