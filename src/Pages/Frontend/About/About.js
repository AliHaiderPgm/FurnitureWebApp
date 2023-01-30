import React from 'react'
import Images from 'Assets/Images'
import OurServices from 'Pages/Frontend/Components/local/OurServices';
import InstagramSection from 'Pages/Frontend/Components/local/InstagramSection';
import Header from 'Pages/Frontend/Components/local/Header';


export default function About() {
    return (
        <>
            {/* // First Section */}

                <Header pageName='About'/>

            {/* Second section */}

            <div className="container mb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8">
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt enim distinctio quisquam, ratione inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo enim possimus facilis repellendus, eaque culpa quidem assumenda laborum praesentium ipsa, harum est laudantium cumque?</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <img src={Images.about1} alt="Chair" className='img-fluid ps-0 ps-md-5 ps-lg-4'/>
                    </div>
                </div>
                <div className="row mt-4 mb-3 pt-3">
                    <div className="col text-center">
                        <h1 className='fw-bold text-uppercase'>Journey start from</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8">
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt enim distinctio quisquam, ratione inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo enim possimus facilis repellendus, eaque culpa quidem assumenda laborum praesentium ipsa, harum est laudantium cumque?</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <img src={Images.about2} alt="Sofa" className='img-fluid ps-0 ps-md-5 ps-lg-4' />
                    </div>
                </div>
                <div className="row mt-4 mb-3 pt-3">
                    <div className="col text-center">
                        <h1 className='fw-bold text-uppercase'>2020</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-7">
                        <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum fugit quae distinctio! Quia voluptatem et nobis fugit, veniam explicabo assumenda harum! Ducimus dolore, iure obcaecati recusandae in dicta sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore inventore maxime temporibus similique necessitatibus eaque possimus, repellendus nihil sit! Ipsa.</p>
                    </div>
                </div>
            </div>


            <InstagramSection/>
            <OurServices />
        </>
    )
}
