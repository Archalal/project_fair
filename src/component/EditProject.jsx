import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
// import projectimg from "../assets/image/project.png";
import baseURL from "../../services/baseURL";
import { updateProjects } from "../../services/allApi";



const EditProject = ({ project }) => {
  // console.log(project);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [EditingProject, setEditingProject] = useState({
    projectId:project._id,
    projectImg: "",
    projectTitle: project.projectTitle,
    projectLanguage: project.projectLanguage,
    projectOverView: project.projectOverview,
    projectGitLink: project.projectGitLink,
    projectWebsiteLink: project.projectWebsiteLink,
  });
 const[preview,setPreview]=useState()
 const[imgTypeStatus,setImgTypeStatus]=useState(false)

   useEffect(()=>{
      if(EditingProject.projectImg){
        console.log(EditingProject.projectImg.type);
        
  
        if(EditingProject.projectImg.type=="image/jpeg" || EditingProject.projectImg.type=="image/png"||EditingProject.projectImg.type=="image/jpeg"){
          setImgTypeStatus(true)
        
        
          setPreview(URL.createObjectURL(EditingProject.projectImg))
  
        }
        else{
          setImgTypeStatus(false)
          alert("enter the img format(jpeg,png,jpg)")
        }
  
      
      }
    },[EditingProject.projectImg])

    const onEditBtnClick=async()=>{


      if( 
        EditingProject.projectTitle &&
        EditingProject.projectLanguage &&
        EditingProject.projectOverView &&
        EditingProject.projectGitLink &&
        EditingProject.projectWebsiteLink ){
          const paylod= new FormData()

         preview? paylod.append("projectImg",EditingProject.projectImg): paylod.append("projectImg",project.projectImg)
          paylod.append("projectTitle", EditingProject.projectTitle )
          paylod.append("projectLanguage", EditingProject.projectLanguage)
          paylod.append("projectOverView", EditingProject.projectOverView)
          paylod.append("projectGitLink",   EditingProject.projectGitLink)
          paylod.append("projectWebsiteLink",   EditingProject.projectWebsiteLink)

          let token=sessionStorage.getItem("token")
          if(token){

            let reqHeaders={
              "Authorization":`Bearer ${token}`,
              "Content-Type":"multipart/form-data"
            }
            let apiresponse=await updateProjects(EditingProject.projectId,paylod,reqHeaders)
            if(apiresponse.status==200){
              console.log("successfully edited");
              
            }

            else{
              console.log("went wrong");
              
            }

          }else{
            alert("please login")
          }
        }
        

    
    else{
      alert("fill the form")
    }
    }



  return (
    <div>
      <div>
        <button onClick={handleShow} className="btn">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <div>
        <Modal
          size="lg"
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
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setEditingProject({
                        ...EditingProject,
                        projectImg: e.target.files[0],
                      })
                    }
                  />
                  <img
                    src={preview ? preview :`${baseURL}/uploads/${project.projectImg}`}
                    alt=""
                    className="img-fluid"
                  />
                </label>
                {!imgTypeStatus ? (
                  <p className="fw-bolder text-warning">
                    Upload only the following files type (JPEG,PNG,JPG)here !!!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-8">
                <input
                  onChange={(e) =>
                    setEditingProject({
                      ...EditingProject,
                      projectTitle: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="project title "
                  className="form-control mt-2"
                  value={ EditingProject.projectTitle}
                />
                <input
                  onChange={(e) =>
                    setEditingProject({
                      ...EditingProject,
                      projectLanguage: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Language "
                  className="form-control mt-3"
                  value={EditingProject.projectLanguage}
                />
                <input
                  onChange={(e) =>
                    setEditingProject({
                      ...EditingProject,
                      projectOverView: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="OverView "
                  className="form-control mt-3"
                  value={EditingProject.projectOverView}
                />
                <input
                  onChange={(e) =>
                    setEditingProject({
                      ...EditingProject,
                      projectGitLink: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Project gitHub Link "
                  className="form-control mt-3"
                  value={EditingProject.projectGitLink}
                />
                <input
                  onChange={(e) =>
                    setEditingProject({
                      ...EditingProject,
                      projectWebsiteLink: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="project Website Link "
                  className="form-control mt-3"
                  value={EditingProject.projectWebsiteLink}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onEditBtnClick}>EDit ChANGES</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default EditProject;
