import { faClock, faCreditCard, faMoneyBill1, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function OurServices() {
  return (
    <div className="container-fluid mt-5 bg-lightColor p-5">
        <div className="row ">
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
  )
}
