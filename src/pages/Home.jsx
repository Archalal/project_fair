import React from 'react'
import { Link} from 'react-router-dom'
import landingImage from '../assets/image/pageLanding.png'
import CardProject from '../component/CardProject'
import Card from 'react-bootstrap/Card';





const Home = () => {
  return (
    <div>

        <div className="d-flex justify-content-center align-items-center rounded shadow" style={{height:"100vh"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 style={{fontSize:"60px"}}>  <i class="fa-brands fa-docker" style={{fontSize:"60px"}}></i>Project Fair</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae vitae similique quasi dolores. Numquam minima doloremque quibusdam id alias maxime esse, blanditiis eius a. Amet temporibus ipsa aliquid harum?</p>
                        <Link to={"/dashboard"} className='btn btn-warning'>Start to Explore </Link>
                    </div>
                    <div className="col-lg-6">
                        <img src={landingImage} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
             
        </div>

        <div className="mt-5 text-center">
            <h1 className='mt-5'>Explore the Projects</h1>
            <marquee>
                <div className="d-flex">
                    <div className="me-5">
                    <CardProject />
                    </div>
                </div>
            </marquee>
            <button className='btn btn-link mt-5' style={{textDecoration:"none"}}>Click Here to View more Projects...</button>

        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
            <h3>Our Testimonials</h3>
            <div className="d-flex justify-content-evenly align-item-center mt-3 w-100" >
            <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png" alt=""   className='img-fluid-rounded-circle ' style={{height:"60px",width:"60px"}}/>
            <span  className='mt-1'>David Miller</span>
        </Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-center text-warning'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        </div>
        </Card.Text>
        <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea optio nemo at? Recusandae neque necessitatibus error.
        </Card.Text>

       
      
      </Card.Body>
    </Card>

            </div>

        </div>
      
    </div>
  )
}

export default Home
