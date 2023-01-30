import React, { useEffect, useState } from 'react'
import Header from '../Components/local/Header'

export default function Cart() {
  const [items, setItems] = useState([])
  useEffect(() => {
    let items = localStorage.getItem('items')
    if (items === null) {
      setItems([])
    }
    else {
      let itemsObj = JSON.parse(items)
      setItems(itemsObj)
      console.log(itemsObj)
    }
  }, [])
  return (
    <>
      <Header pageName="Cart" />
      {
        items.length === 0 ?
          <div className="container py-5">
            <div className="row text-center py-5">
              <h1>Nothing in cart</h1>
            </div>
          </div>
          :
          <>
            <div className="container pt-5">
              <div className="row">
                <div className="col-8">
                  <p className='text-muted'>Product</p>
                </div>
                <div className="col-1">
                  <p className='text-muted'>Price</p>
                </div>
                <div className="col-2 text-center">
                  <p className='text-muted'>Quantity</p>
                </div>
                <div className="col-1 ">
                  <p className='text-muted'>Total</p>
                </div>
                <hr />
              </div>
            </div>

            <div className="container">
              {
                items.map((item, index) => {
                  return (
                    <div className='row ' key={index}>
                      <div className="col-8 d-flex align-items-center">
                        <img src={item.img} alt="Added to cart product" className='img-fluid' style={{ objectFit: 'cover', width: '50%' }} />
                        <p className='text-muted px-2'>{item.desc}</p>
                      </div>
                      <div className="col-1 d-flex align-items-center">
                        {item.price}
                      </div>
                      <div className="col-2 ">
                      </div>
                      <hr className='mt-3'/>
                    </div>
                  )
                })
              }
            </div>
          </>
      }

    </>
  )
}
