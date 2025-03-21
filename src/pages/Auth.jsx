import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { registerUser } from '../../services/allApi';


const Auth = ({fromRegister}) => {

  const[data,setData]=useState({
    username:"",
    email:"",
    password:""
  })

  const onBtnClick=async(e)=>{
    e.preventDefault()
    

   if(fromRegister){
    if(data.username && data.email && data.password){
      const apiResponse= await registerUser(data)
      console.log(apiResponse);
      

    }else{
      console.log("something went wrong");
      

    }
   }
   else{
    console.log("fill the form");
    
   }

  }
  return (
    <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center'>
    <div className="container w-75 border shadow  rounded ">
      <Row>
        <Col><img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/project-work-7462828-6104102.png" alt="" /></Col>
        <Col>
        <h1 className='mt-3'><i className='fa-brands fa-docker'></i>Project Fair</h1>
        <h4>Sign {fromRegister?"Up":"In"} to Your account</h4>
        <Form className='mt-5 '>
        <>
      
    <div>
      {
        fromRegister?
        <div>
            <FloatingLabel
        controlId="floatingInput"
        label="userName"
        className="mb-3"
      
      >
        <Form.Control type="name" placeholder="name"
       onChange={(e)=>setData({...data,username:e.target.value})}  />
      </FloatingLabel>
        </div>:""
      }
    </div>
    <div>
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
       
      >
        <Form.Control type="email" placeholder="name@example.com" 
         onChange={(e)=>setData({...data,email:e.target.value})} />
      </FloatingLabel>

    </div>
      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password"
       onChange={(e)=>setData({...data,password:e.target.value})}  />
      </FloatingLabel>
    </>
    <button className='mt-2 btn btn-primary'
    onClick={onBtnClick}>
      
      {fromRegister?"register":"login"}</button>
    <p className='mt-5'>
        New User?Please click here to {fromRegister?
        <Link to={'/login'}>login</Link
        >:
        <Link to={'/register'}>register</Link>}
    </p>
        </Form>
        </Col>
      </Row>
       
      </div>

    </div>
  );
};

export default Auth;