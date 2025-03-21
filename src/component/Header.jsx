import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = ({insideDashboard}) => {
  return (
    <div >
       <Navbar className="bg-body-primary " sticky='top' >
        <Container>
         <Link to={"/"} style={{textDecoration:"none"}} >
         <Navbar.Brand >
          <i className='fa-brands fa-docker text-light'></i>{' '}
          <span style={{color:"white"}}>  Project Fair</span>
          </Navbar.Brand>
         </Link>
         {insideDashboard?
         <button className='btn btn-link'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>:""}
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
