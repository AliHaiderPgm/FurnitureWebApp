import React from 'react'
import Images from 'Assets/Images'
import { Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function CustomCard(props) {
    const navigate = useNavigate()
    let img = Images[props.image]
    let title = 'Faded SkyBlu Denium Jeans'
    let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem?'
    let price = '367$'
    let category= 'Household'
    let availibility= 'In stock'
    let data = {
        title: title,
        desc: desc,
        price: price,
        category: category,
        availibility: availibility,
        img: img
    }
    const handleClick =()=>{
        navigate("/productDetail", {state: {data: data}})
    }
    return (
        <Card bordered={false}
            style={{ maxWidth: '100%' }}
            hoverable
            className='text-center'
            cover={<img alt="Sofa" src={img} height='205' style={{ objectFit: 'cover' }} />}>
            <Link to='/productDetail' className='text-dark text-decoration-none'>{desc}</Link> <br />
            <span className='priceColor'>{price}</span><br />
            <Button variant="outlined" className='px-3 py-2 my-2' onClick={handleClick}>Details</Button>
        </Card>
    )
}
