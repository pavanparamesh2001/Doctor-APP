import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocDetails from './DocDetails';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
  import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function AllDoc() {
  const base_url ='https://doctor-booking-backend-y7or.onrender.com/doctors'
  const [docData,setDocData] = useState([])
  const fetchData =async()=>{
    const response= await axios.get(base_url)
    console.log(response.data);
    setDocData(response.data);
  }
  console.log(docData);
  useEffect(()=>{
fetchData();
  },[])
  
  return (
    <div>
<MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://img.freepik.com/premium-photo/doctor-healthcare-team-medical-expert-working-hospital-together-doing-consultation-happy-clinic-portrait-motivation-teamwork-cardiology-arms-crossed-partnership_590464-83759.jpg' className='d-block w-100' height={'500px'} alt='...' />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg' className='d-block w-100'height={'500px'}  alt='...' />

        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://media.istockphoto.com/id/1307543618/photo/team-of-doctors-and-nurses-in-hospital.webp?b=1&s=170667a&w=0&k=20&c=FwSb6Foq3AtPXl2TR23wF8dlX3wVXI2QqxaQ8BqKFMk=' className='d-block w-100' height={'500px'} alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    <div className="row m-5">
        <div className="col">
            <img src="https://thelocaldoctor.com.au/wp-content/uploads/2021/04/doctor-slider-900.jpg" alt="" width={'500px'} height={'360px'} />
        </div>
        <div className="col">
            <h3 style={{color:'darkblue'}}>Welcome to Medzo- Empowering Your Health Journey! </h3>
            <p>
            At Medzo, we understand the importance of your health and well-being. That's why we've created a seamless and user-friendly platform to simplify the process of booking doctor appointments. Our mission is to connect you with the right healthcare professionals, making your journey to wellness as convenient and efficient as possible.
            </p>
            <h4 style={{color:'darkblue'}}>1. Easy Appointment Booking:</h4>
            <p>Gone are the days of waiting in long queues or spending precious time on the phone. With Medzo, you can effortlessly schedule appointments with your preferred doctors at the click of a button. Our intuitive platform allows you to browse through a diverse range of healthcare providers, view their availability, and secure your appointment without any hassle.</p>
        </div>
        <div>
        <h3 style={{color:'darkblue'}}>2. Comprehensive Healthcare Network:</h3>
            <p>Medzo boasts an extensive network of qualified and experienced healthcare professionals across various specialties. Whether you're looking for a general practitioner, specialist, or allied healthcare provider, we've got you covered. Our platform ensures that you have access to a wide range of medical expertise to address your unique healthcare needs.</p>
            <h3 style={{color:'darkblue'}}>3. Reviews and Ratings:</h3>
            <p>Make informed decisions about your healthcare by exploring reviews and ratings from other Medzo users. We believe in transparency, and the feedback from our community can guide you in choosing the right healthcare professional for your needs.

Join us on the journey to better health with Medzo. We're committed to revolutionizing the way you access healthcare services, making it a convenient and personalized experience. Your well-being is our priority, and we're here to simplify the path to a healthier, happier you. Medzo -Discovering Seamless Healthcare Access !</p>

        </div>
        
    </div>
    
<section className='services'>
  
  <h1 className='text-center'>Services Provided</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/brain-spect-scanning-process.jpg'></img>
          <h4>Brain Spect</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2020/04/HUB_Size_Telehealth-492x333.jpg'></img>
          <h4>Telehealth and Video therapy</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/Psychiatric-Evaluations-492x333.jpg'></img>
          <h4>Psychiatric Evaluations</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/12/Memory-Rescue-Program-492x333.jpg'></img>
          <h4>Memory Rescue Program</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/12/Concussion-Rescue-Program-492x333.jpg'></img>
          <h4>Concussion Rescue Program</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/HBOT_2-492x333.jpg'></img>
          <h4>Hyperbaric Oxygen Therapy</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/therapy-session.jpg'></img>
          <h4>Psychotherapy</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2023/07/Hub-image-Hypnotherapy-500x500-1-492x333.jpg'></img>
          <h4>Hypnotherapy</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/neurofeedback-test.jpg'></img>
          <h4>NeuroFeedback</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2023/07/Hub-image-CBT-500x500-1-492x333.jpg'></img>
          <h4>Cognitive Behavioural Therapy</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2019/11/QEEG-2-492x333.jpg'></img>
          <h4>qEEG</h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="services-box">
          <img src='https://www.amenclinics.com/wp-content/uploads/2020/11/EMDR_Button-492x333.jpg'></img>
          <h4>EMDR therapy</h4>
        </div>
      </div>
      
    </div>
    
  </div>
  
</section>
<div>


</div>
<div className='m-5'>
<h1 className='mx-3 ' style={{color:'darkblue'}}>Find a Doctor</h1><hr className="hr" />
<div className="row">
  {
    docData.map(item=>
      (
        <div className="col m-3">
      <MDBCard  className='text-white mb-3' style={{width:'320px',height:'250px', boxShadow:'4px,4px,4px'}}>
      <MDBCardHeader><h5 style={{color:'darkblue'}}>{item.hospital}</h5></MDBCardHeader>
      <MDBCardBody>
        
      <MDBCardTitle className='text-primary'>{item.name}</MDBCardTitle>
          <MDBCardText>
           <h6 style={{color:'darkblue'}}>{item.specialty}</h6>
           <p className='text-dark'>{item.address}</p>
          </MDBCardText>
        
          <MDBBtn className='me-1 p-2 m-3 mx-5' color='info'>
                  <Link to={`/view/${item.id}`} style={{ textDecoration: 'none' }}>
                    BOOK AN APPOINTMENT →
                  </Link>
                </MDBBtn>{''}
      </MDBCardBody>
      
    </MDBCard>
</div>
))
      
  }
</div>

</div>
    </div>
    
    
    
    
    
    
  )
}

export default AllDoc