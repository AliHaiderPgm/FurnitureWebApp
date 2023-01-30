import React from 'react'
import Header from 'Pages/Frontend/Components/local/Header'
import Tabs from 'Pages/Frontend/Components/Tabs'
import CustomCard from 'Pages/Frontend/Components/local/CustomCard'
import { Box, Button } from '@mui/material'
import OurServices from '../Components/local/OurServices'
export default function Product() {
  return (
    <>
      <Header pageName='Product' />
      <div className="container text-center my-4 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <h1>Products you may like</h1>
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt quaerat, officiis natus quis sed? Minima quibusdam aperiam sapiente laboriosam!</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Tabs />
      </div>


      <div className="container text-center mb-4">
        <Box sx={{ width: '100%' }}>
          <div className="container">
            <div className="row g-2">
              <div className="col-sm-12 col-md-5 col-lg-4">
                <CustomCard image="chair1" />
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                <CustomCard image="chair2" />
              </div>
              <div className="col-sm-12 col-lg-4">
                <CustomCard image="chair3" />
              </div>
            </div>
          </div>
        </Box>
      </div>

      <div className="container text-center">
        <Box sx={{ width: '100%' }}>
          <div className="container">
            <div className="row g-2  offset-md-0">
              <div className="col-sm-12 col-md-5 col-lg-4">
                <CustomCard image="sofa1" />
              </div>
              <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                <CustomCard image="sofa2" />
              </div>
              <div className="col-sm-12 col-lg-4">
                <CustomCard image="sofa3" />
              </div>
              <div className="col">
                <Button variant="outlined" className=' px-5 py-3 my-4'>Discover more</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <OurServices/>
    </>
  )
}
