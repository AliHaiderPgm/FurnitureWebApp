import React, { useState } from 'react'
import Header from '../Components/local/Header'
import Images from 'Assets/Images'
import { useLocation } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DetailsReview from '../Components/local/Details&Reviews'


export default function ProductDetail() {
  const [number, setNumber] = useState(0)
  const location = useLocation()
  const data = location.state.data
  data.id = window.getRandomId()
  const smallImg = {
    height: '100px',
    objectFit: 'cover',
  }
  const handleClick = (e) => {
    e.target.value === 'add' ? setNumber(number + 1) : setNumber(number <= 0 ? number : number - 1)
  }
  const handleAddToCart = ()=>{
    let items = localStorage.getItem('items')
    let itemsObj = null
    if(items === null ){
      itemsObj = []
    }
    else{
      itemsObj = JSON.parse(items)
    }
    itemsObj.push(data)
    localStorage.setItem('items', JSON.stringify(itemsObj))
  }
  return (
    <>
      <Header pageName="Product Detail" />
      <div className="container pt-5">
        <div className="row mb-5 g-2">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col">
                <img src={data.img} alt="Chair" className='img-fluid ' />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <img src={Images.bed1} alt="Bed" className='img-fluid w-25' style={smallImg} />
                <img src={Images.sofa1} alt="Sofa" className='img-fluid w-25' style={smallImg} />
                <img src={Images.chair2} alt="Chair" className='img-fluid w-25' style={smallImg} />
                <img src={Images.chair3} alt="Chair" className='img-fluid w-25' style={smallImg} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>{data.title}</h1>
                  <h2 className='text-primary'>{data.price}</h2>
                  <p>Category:&nbsp;&nbsp;&nbsp; {data.category}</p>
                  <p>Availibility:&nbsp;&nbsp;&nbsp;{data.availibility}</p>
                  <hr />
                  <p>{data.desc}</p>
                  <div className='col-4 col-lg-3 d-flex flex-row justify-content-center border border-primary border-opacity-50 rounded-pill my-4'>
                    <Stack direction="row" spacing={1}>
                      <IconButton aria-label="fingerprint" color="success" onClick={handleClick} value='sub'>
                        -
                      </IconButton>
                      <IconButton>
                        {number}
                      </IconButton>
                      <IconButton aria-label="fingerprint" color="primary" onClick={handleClick} value='add'>
                        +
                      </IconButton>
                    </Stack>
                  </div>
                  <Button variant="contained" className="text-uppercase text-white w-50 p-3 bg-primaryColor" onClick={handleAddToCart}>Add to cart</Button>
                  <IconButton className="mx-3" >
                    <FavoriteBorderIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <DetailsReview/>
        </div>
      </div>
    </>
  )
}
