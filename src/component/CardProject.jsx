import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';



const CardProject = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
      <Card className='btn shadow'>
        <Card.Img  onClick={handleShow} 
      
        src='https://imgcdn.stablediffusionweb.com/2024/3/27/c2415304-f256-47ea-8842-b6ac98f1b404.jpg'  height={"150px"} variant='top'/>
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
                    <img src="https://imgcdn.stablediffusionweb.com/2024/3/27/c2415304-f256-47ea-8842-b6ac98f1b404.jpg" alt=""  className='img-fluid'/>
                </div>
                <div className="col-lg-6">
                    <h3>Cal</h3>
                    <h5>Languages used : <span className='text-warning'>HTML,CSS</span></h5>
                    <p style={{textAlign:"justify"}}> <span className='fw-bolder'>Project OverView :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='float-start mt-3 '>
                <a href=''><i class="fa-brands fa-github" className='btn  text-warning'></i></a>
                <a href=''><i class="fa-solid fa-link"></i></a>

            </div>
        </Modal.Body>
      
      </Modal>
      </div>
    </div>
  )
}

export default CardProject
