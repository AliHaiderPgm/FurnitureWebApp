import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import aboutMain from 'Assets/Images/hero1.jpg'

export default function Header(props) {
    const breadcrumbs = [
        <Link underline="hover" key="1" color='inheret' to="/" >
            Home
        </Link>,
        <Typography key="2">
            {props.pageName}
        </Typography>
    ];
    return (
        <div className='container-fluid mb-5'>
            <div className="row position-relative">
                <div className="col py-0 pe-4 ps-1">
                    <img src={aboutMain} alt="Room" className='img-fluid bg-shadow' style={{ minHeight: '30vh', objectFit: 'cover', objectPosition: '62%' }} />
                </div>
                <div className="col-8 position-absolute text-white fs-1" style={{ top: '40%', left: '10%' }}>
                    <h1 className='text-uppercase fw-bold'>{props.pageName}</h1>
                    <Stack spacing={2}>
                        <Breadcrumbs separator="›" aria-label="breadcrumb" className='text-white'>
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
