import React from 'react'
import Images from 'Assets/Images'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function CustomCard(props) {
    const navigate = useNavigate()
    let img = Images[props.image]
    let title = 'Faded SkyBlu Denium Jeans'
    let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem?'
    let price = 367
    let category = 'Household'
    let availibility = 'In stock'
    let id = window.getRandomId()
    let data = {
        title: title,
        desc: desc,
        price: price,
        category: category,
        availibility: availibility,
        img: img,
        id: id
    }
    const handleClick = () => {
        navigate("/productDetail", { state: { data: data } })
    }
    return (
        <Card bordered={false}
            onClick={handleClick}
            style={{ maxWidth: '100%' }}
            hoverable
            className='text-center'
            cover={<img alt="Sofa" src={img} height='205' style={{ objectFit: 'cover' }} />}>
            <h6 className='text-dark fw-normal'>{desc}</h6>
                <h6 className='priceColor pt-2'>{price}$</h6>
        </Card>
    )
}
