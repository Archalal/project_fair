import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../../services/allApi';
import { toast } from 'react-toastify';
import { LoginContext } from '../context/AuthContext';






const Auth = ({fromRegister}) => {
  const{isLoggined,setIsLoginned}=useContext(LoginContext)
  const navigate=useNavigate()

  const[data,setData]=useState({
    username:"",
    email:"",
    password:""
  })

  const onBtnClick=async(e)=>{
    e.preventDefault()
    

   if(fromRegister){
  try{
    const{username,email,password}=data
    if(username && email && password){
      let apiResponse= await registerUser(data)
      console.log(apiResponse);
      if(apiResponse.status==201){
        alert("user login suceessfull")
      }else{
        if(apiResponse.status==409){
          alert("user already exist , please login")
          navigate('/login')
        }
      }
      

    } else{
      console.log("fill the form");
      
     }
   }catch(err){
    console.log(err);
    
   }
  }
  else{
    if(data.email && data.password){
      let payload={
        email:data.email,
        password:data.password
      }

      let apiResponse=await loginUser(payload)
      setIsLoginned(true)
      console.log(apiResponse);
      if(apiResponse.status==200){
       

        sessionStorage.setItem("user",apiResponse?.data?.user.username)
        sessionStorage.setItem("token",apiResponse?.data?.token)
        navigate('/dashboard')

      }else if(apiResponse?.status==401){
        // alert(apiResponse?.message)
        toast.error(apiResponse?.message)
      }
      else{
        console.log("server error");
        
      }
      

    }
    else{
      alert("fill the form")
    }
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