import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link} from 'react-router-dom'
// Image
import Logo from '../../../../Assets/Images/logo2.png'
export default function Footer() {
  return (
    <footer className="bd-footer py-4 py-md-5 bg-shadowLeft ms-3 bg-body-tertiary bg-secondaryColor text-white">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <Link  className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none color" href="/" aria-label="Bootstrap">
              <img src={Logo} alt="FURN-Logo" className='image-fluid'/>
            </Link>
            <ul className="list-unstyled small my-4">
              <li className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, incidunt.</li>
            </ul>
            <div className="row flex-row">
              <span className='col-1 mx-1'>
                <FontAwesomeIcon icon={faTwitter} style={{fontSize:'32px'}}/>
              </span>
              <span className='col-1 mx-1'>
                <FontAwesomeIcon icon={faFacebook} style={{fontSize:'32px'}}/>
              </span>
              <span className='col-1 mx-1'>
                <FontAwesomeIcon icon={faPinterest} style={{fontSize:'32px'}}/>
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mt-5">
              <li className="mb-2"><Link className="color text-decoration-none">Imgage Licensin</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Style Guid</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Shop Category</h5>
            <ul className="list-unstyled mt-5">
              <li className="mb-2"><Link className="color text-decoration-none">Imgage Licensin</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Style Guid</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Partners</h5>
            <ul className="list-unstyled mt-5">
              <li className="mb-2"><Link className="color text-decoration-none">Imgage Licensin</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Style Guid</Link></li>
              <li className="mb-2"><Link className="color text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
