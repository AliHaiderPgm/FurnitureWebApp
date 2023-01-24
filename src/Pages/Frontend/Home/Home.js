import React from 'react'
import Main from '../../../Assets/Images/main.jpg'
import Button from '@mui/material/Button';
import Tabs from '../Components/Tabs'
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Card } from 'antd';
// images
import bestFurniture from 'Assets/Images/best-furniture-maker.jpg'
import chair1 from 'Assets/Images/chair-1.jpg'
import chair2 from 'Assets/Images/chair-2.jpg'
import chair3 from 'Assets/Images/chair-3.jpg'
import insta1 from 'Assets/Images/instragram-1.jpg'
import insta2 from 'Assets/Images/instragram-2.jpg'
import sofa1 from 'Assets/Images/sofa-1.jpg'
import sofa2 from 'Assets/Images/sofa-2.jpg'
import sofa3 from 'Assets/Images/sofa-3.jpg'

export default function Home() {
  return (
    <>
    
      <div className="container-fluid mb-5">
        <div className="row position-relative">
          <div className="col">
            <img src={Main} alt="FURN" className='img-fluid bg-shadow' style={{ minHeight: '80vh',maxHeight:'100vh', width:'98%',objectFit: 'cover', objectPosition:'55%' }} />
          </div>
          <div className="col-9 col-md-4 position-absolute" style={{top:'20%', left:'16%'}}>
            <Card style={{ maxWidth: '100%',minWidth:'100%',maxHeight:400,minHeight:320 }} className='d-flex flex-column justify-content-center'>
              <h5 className='text-muted text-uppercase mb-3 mb-md-0'>70% Sales off</h5>
              <h1 className='text-uppercase mb-3 mb-md-1' style={{fontWeight:'800'}}>Furniture at cost</h1>
              <p className='text-muted mb-4 mb-md-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit asperiores velit nobis sapiente veniam?</p>
              <Button variant="contained" className='text-white w-50 p-3 bg-primaryColor'>Discover More</Button>
            </Card>
          </div>
        </div>
      </div>


{/****************************************** Products you may like */}
      <div className="container mt-5 py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-8 offset-0 offset-md-2 mb-4">
              <h1>Products you may like</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Tabs />
            </div>
          </div>
        </div>
      </div>

{/*********************************************Best furniture  */}

      <div className="container-fluid my-5 mx-0 px-0" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 px-0">
            <img src={bestFurniture} alt="Best Furniture Selling" className='img-fluid' />
          </div>
          <div className='col-12 col-md-6 p-5 p-md-3 bg-lightColor'>
            <div className="row justify-content-center align-items-center h-100">
              <div className="col p-sm-5 p-md-2 p-lg-5">
                <h1>Best Furniture Manufacturer</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut.<br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloribus. </p>
                <Button variant="contained" className='text-white w-50 p-3  bg-primaryColor'>Discover More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/********************************************** Products you may like */}

      <div className="container text-center my-4">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <h1>Products you may like</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <Box sx={{ width: '100%' }}>
          <div className="container">
            <div className="row g-2  offset-md-0">
              <div className="col-sm-12 col-md-5 col-lg-4">
                <Card bordered={false}
                  style={{ maxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={chair1} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                <Card bordered={false}
                  style={{ maxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={chair2} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Card bordered={false}
                  style={{ maxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={chair3} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col">
                <Button variant="outlined" className=' px-5 py-3 my-4'>Discover more</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>


      {/* Instagram */}

      <div className="container-fluid pl-3 mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 faIcon p-4">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <h1>Get inspired with instagram</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ratione doloribus minima, dolores quas autem possimus officia quis perspiciatis voluptates.</p>
            <Button variant="outlined" className=' px-5 py-3 my-2'>Discover more</Button>
          </div>

          <div className="col-sm-12 col-md-4 p-0">
            <img src={insta1} alt="Sofa" className='img-fluid h-100' style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-sm-12 col-md-4 p-0">
            <img src={insta2} alt="Sofa" className='img-fluid h-100' style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </div>


      <div className="container text-center my-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <h1>Products you may like</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <Box sx={{ width: '100%' }}>
          <div className="container">
            <div className="row g-2  offset-md-0">
              <div className="col-sm-12 col-md-5 col-lg-4">
                <Card bordered={false}
                  style={{ maxmaxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={sofa1} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                <Card bordered={false}
                  style={{ maxmaxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={sofa2} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Card bordered={false}
                  style={{ maxmaxWidth:'100%' }}
                  hoverable
                  cover={<img alt="Sofa" src={sofa3} height='205' style={{ objectFit: 'cover' }} />}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                  <span className='priceColor'>$367</span>
                </Card>
              </div>
              <div className="col">
                <Button variant="outlined" className=' px-5 py-3 my-4'>Discover more</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>

      <div className="container-fluid mt-5 bg-lightColor p-5">
        <div className="row">
          <div className="col-sm-12 col-md-3 p-3 faIconBlack">
            <span>
              <FontAwesomeIcon icon={faTruckFast} />
            </span>
            <h5>Fast & Free Delivery</h5>
            <p className='text-muted'>Free delivery on all order</p>
          </div>

          <div className="col-sm-12 col-md-3 p-3 faIconBlack">
            <span>
              <FontAwesomeIcon icon={faCreditCard} />
            </span>
            <h5>Secure Payment</h5>
            <p className='text-muted'>Free delivery on all order</p>
          </div>

          <div className="col-sm-12 col-md-3 p-3 faIconBlack">
            <span>
              <FontAwesomeIcon icon={faMoneyBill1} />
            </span>
            <h5>Money Back Guarantee</h5>
            <p className='text-muted'>Free delivery on all order</p>
          </div>

          <div className="col-sm-12 col-md-3 p-3 faIconBlack">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            <h5>Online Support</h5>
            <p className='text-muted'>Free delivery on all order</p>
          </div>

        </div>
      </div>
    </>
  )
}
