import React from 'react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import insta1 from 'Assets/Images/instagram-1.jpg'
import insta2 from 'Assets/Images/instagram-2.jpg'
import { Button } from '@mui/material'

export default function InstagramSection() {
  return (
    <div className="container-fluid pl-3 mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 faIcon p-4">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <h1>Get inspired with instagram</h1>
            <p className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ratione doloribus minima, dolores quas autem possimus officia quis perspiciatis voluptates.</p>
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
  )
}
