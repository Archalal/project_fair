import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import baseURL from '../../services/baseURL';



const CardProject = ({project}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
      <Card className='btn shadow'>
        <Card.Img  onClick={handleShow} 
      // src=""
        src={`${baseURL}/uploads/${project.projectImg}`} 
         height={"150px"} variant='top'/>
            <Card.Body   onClick={handleShow}>
                Project1

            </Card.Body>
      </Card>
      <div>
      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title >....Project Details...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img  src={`${baseURL}/uploads/${project.projectImg}`} alt=""  className='img-fluid'/>
                </div>
                <div className="col-lg-6">
                    <h3>{project.projectTitle}</h3>
                    <h5>Languages used : <span className='text-warning'>{project.projectLanguage}</span></h5>
                    <p style={{textAlign:"justify"}}> <span className='fw-bolder'>Project OverView :</span>{project.projectOverview}</p>
                </div>
            </div>
            <div className='float-start mt-3 '>
                <a href={project.projectGitLink
              }><i class="fa-brands fa-github" className='btn  text-warning'></i></a>
                <a href=''><i class="fa-solid fa-link"></i></a>

            </div>
        </Modal.Body>
      
      </Modal>
      </div>
    </div>
  )
}

export default CardProject
