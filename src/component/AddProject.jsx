import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import projectimg from '../assets/image/project.png'


const AddProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <input type='file' style={{display:"none"}} />
        <img src={projectimg} alt="" className='img-fluid' />
        </label>
        <p className='fw-bolder text-warning'>
          Upload only the following files type (JPEG,PNG,JPG)here !!!
        </p>
        </div>
        <div className="col-lg-8">
          <input type="text"  placeholder='project title ' className='form-control mt-2'/>
          <input type="text"  placeholder='Language ' className='form-control mt-3'/>
          <input type="text"  placeholder='OverView ' className='form-control mt-3'/>
          <input type="text"  placeholder='Project gitHub Link ' className='form-control mt-3'/>
          <input type="text"  placeholder='project Website Link ' className='form-control mt-3'/>
        </div>

      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    
      
    </div>
  )
}

export default AddProject
