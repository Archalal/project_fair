import React from 'react'
import Header from '../component/Header'
import { Col, Row } from 'react-bootstrap'
import CardProject from '../component/CardProject'



const Projects = () => {
  return (
    <div>
      <Header />
     <div className="container-fluid">
     <div  className="d-flex justify-content-between mt-5">
    
    <h2>All projects</h2>
  <input  className=" form-control w-25" placeholder='Search project by language'></input>
   

  </div>
  <div>
    <Row>
      <Col sm={12} md={6} lg={4}>
      <CardProject />
      </Col>
    </Row>

  </div>
     </div>
      
    </div>
  )
}

export default Projects
