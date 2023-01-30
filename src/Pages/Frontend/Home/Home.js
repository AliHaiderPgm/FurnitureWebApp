import React from 'react'
import Button from '@mui/material/Button';
import Tabs from 'Pages/Frontend/Components/Tabs'
import Box from '@mui/material/Box';
import { Card } from 'antd';
import Images from 'Assets/Images';
import OurServices from 'Pages/Frontend/Components/local/OurServices';
import InstagramSection from 'Pages/Frontend/Components/local/InstagramSection';
import CustomCard from 'Pages/Frontend/Components/local/CustomCard';

export default function Home() {
  return (
    <>

      <div className="container-fluid mb-5">
        <div className="row position-relative">
          <div className="col">
            <img src={Images.hero1} alt="FURN" className='img-fluid bg-shadow' style={{ minHeight: '80vh', maxHeight: '100vh', width: '98%', objectFit: 'cover', objectPosition: '55%' }} />
          </div>
          <div className="col-9 col-md-4 position-absolute" style={{ top: '20%', left: '16%' }}>
            <Card style={{ maxWidth: '100%', minWidth: '100%', maxHeight: 400, minHeight: 320 }} className='d-flex flex-column justify-content-center'>
              <h5 className='text-muted text-uppercase mb-3 mb-md-0'>70% Sales off</h5>
              <h1 className='text-uppercase mb-3 mb-md-1' style={{ fontWeight: '800' }}>Furniture at cost</h1>
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
            <img src={Images.bestFurniture} alt="Best Furniture Selling" className='img-fluid' />
          </div>
          <div className='col-12 col-md-6 p-5 p-md-3 bg-lightColor'>
            <div className="row justify-content-center align-items-center h-100">
              <div className="col p-sm-5 p-md-2 p-lg-5">
                <h1>Best Furniture Manufacturer</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut.<br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloribus. </p>
                <Button variant="contained" className='text-white w-50 p-3 bg-primaryColor'>Discover More</Button>
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
                <CustomCard image="chair1" />
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                <CustomCard image="chair2" />
              </div>
              <div className="col-sm-12 col-lg-4">
                <CustomCard image="chair3" />
              </div>
              <div className="col">
                <Button variant="outlined" className=' px-5 py-3 my-4'>Discover more</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>


      {/* Instagram */}

      <InstagramSection />


      <div className="container text-center my-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <h1>Products you may like</h1>
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <Box sx={{ width: '100%' }}>
          <div className="container">
            <div className="row g-2  offset-md-0">
              <div className="col-sm-12 col-md-5 col-lg-4">
              <CustomCard image="sofa1"/>
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
              <CustomCard image="sofa2"/>
              </div>
              <div className="col-sm-12 col-lg-4">
              <CustomCard image="sofa3"/>
              </div>
              <div className="col">
                <Button variant="outlined" className=' px-5 py-3 my-4'>Discover more</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>

      <OurServices />
    </>
  )
}
