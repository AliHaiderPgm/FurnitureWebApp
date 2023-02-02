import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/local/Header'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DownOutlined } from '@ant-design/icons';
import { Button as Button2, Dropdown, message, Space, Input } from 'antd';
import OurServices from '../Components/local/OurServices';
export default function Checkout() {
    const { TextArea } = Input;
    const items = [
        {
            key: '1',
            label: (
                <Link rel="noopener noreferrer">
                    1st menu item
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link rel="noopener noreferrer">
                    2nd menu item
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link rel="noopener noreferrer">
                    3rd menu item
                </Link>
            ),
        },
    ];

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
    };
    const countryProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <div style={{overFlowx:'hidden'}}>
                <Header pageName="Check out" />
                <div className="container pt-5">
                    <div className="row mb-3">
                        <div className="col-12 py-2 bg-light-gray">
                            <p className='p-0 m-0'>Returning Customer? <Link>Click here to login</Link></p>
                        </div>
                        <div className="col-12 p-2 text-muted">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam blanditiis placeat, alias dolorem consequatur iusto eum doloremque eveniet error.</p>
                        </div>
                        <div className="col-12 mb-2">
                            <form>
                                <TextField
                                    required
                                    className='w-100'
                                    sx={{ maxWidth: '30ch', margin: 1, marginLeft: 0 }}
                                    label="Username or email"
                                />
                                <TextField
                                    required
                                    sx={{ maxWidth: '30ch', margin: 1, marginLeft: 0 }}
                                    className="w-100"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </form>
                        </div>
                        <div className="col-12 mb-3">
                            <Button variant='contained' className='text-uppercase text-white px-5 py-3 me-2 bg-primaryColor'>Log in</Button>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="Create a new account"
                                labelPlacement="end"
                            />
                        </div>
                        <div className="col-12">
                            <div className="row ">
                                <div className="col-12 py-2 bg-light-gray">
                                    <p className='p-0 m-0'>Have a coupon <Link>Click here to enter your code</Link></p>
                                </div>
                                <div className="col-12 my-2">
                                    <TextField
                                        required
                                        className='w-100'
                                        sx={{ maxWidth: '75ch', margin: 1, marginLeft: 0 }}
                                        label="Username or email"
                                    />
                                </div>
                                <div className="col-12">
                                    <Button variant='contained' className='text-uppercase text-white px-3 px-md-5  py-3 me-2 bg-primaryColor'>Apply coupon</Button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="container my-3">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h5>Biling Detail</h5>
                            <form >
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <TextField className="me-4 mb-3 w-100" label="First Name" variant="outlined" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <TextField className='w-100' label="Last Name" variant="outlined" />
                                    </div>
                                </div>
                                <TextField className="my-3 w-100" label="Company Name" variant="outlined" />
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <TextField className="me-4 mb-3 w-100" label="Phone Number" variant="outlined" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <TextField className="w-100" label="Email Address" variant="outlined" />
                                    </div>
                                </div>
                                <Dropdown menu={countryProps} className="w-100 text-start d-flex justify-content-between align-items-center py-4 mb-3">
                                    <Button2>
                                        <Space>
                                            Country
                                        </Space>
                                        <DownOutlined />
                                    </Button2>
                                </Dropdown>
                                <TextField required className="w-100 mb-3" label="Address line 1" variant="outlined" />
                                <TextField required className="w-100 mb-3" label="Address line 2" variant="outlined" />
                                <TextField required className="w-100 mb-3" label="Town/City" variant="outlined" />
                                <Dropdown menu={countryProps} className="w-100 text-start d-flex justify-content-between align-items-center py-4 mb-3">
                                    <Button2>
                                        <Space>
                                            District
                                        </Space>
                                        <DownOutlined />
                                    </Button2>
                                </Dropdown>
                                <TextField className="w-100 mb-3" label="Postcode/ZIP" variant="outlined" />
                            </form>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="Ship to a new address?"
                                labelPlacement="end"
                            />
                            <TextArea
                                showCount
                                maxLength={100}
                                style={{
                                    height: 120,
                                }}
                                placeholder="Order Notes"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="container bg-light-gray">
                                <h5 className='m-0 p-0 py-3'>Your Order</h5>
                                <hr className='mt-0 p-0' />
                                <ul className=' px-2' style={{ fontSize: '13px' }}>
                                    <li className='list-group-item display-block text-muted'>
                                        Products
                                        <span style={{ float: "right" }}>Total</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block text-muted'>
                                        Fresh Blackbery
                                        <span className='ps-1 text-dark'>x 02</span>
                                        <span style={{ float: "right" }}>$720.00</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block text-muted'>
                                        Fresh Tomatos
                                        <span className='ps-1 text-dark'>x 02</span>
                                        <span style={{ float: "right" }}>$720.00</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block text-muted'>
                                        Fresh Brocoli
                                        <span className='ps-1 text-dark'>x 02</span>
                                        <span style={{ float: "right" }}>$720.00</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block'>
                                        SUBTOTAL
                                        <span style={{ float: "right" }}>$2160.00</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block'>
                                        SHIPING
                                        <span style={{ float: "right" }}>Flat rate: $50.00</span>
                                        <hr />
                                    </li>
                                    <li className='list-group-item display-block'>
                                        TOTAL
                                        <span style={{ float: "right" }}>$2120.00</span>
                                        <hr />
                                    </li>
                                </ul>
                                <div className="container" style={{ fontSize: '13px' }}>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="Check payments"
                                        className='text-uppercase'
                                        size='small'
                                        labelPlacement="end"
                                    />
                                    <p className='bg-white p-3 text-muted rounded-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda iusto reiciendis deleniti</p>
                                </div>
                                <div className="container" style={{ fontSize: '13px' }}>
                                    <div className="row">
                                        <div className="col">
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox />}
                                                label="Paypal"
                                                className='text-uppercase'
                                                size='small'
                                                labelPlacement="end"
                                            />
                                        </div>
                                        <div className="col p-1">
                                            <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/card.jpg.webp" alt="Bank cards" className='img-fluid pt-2 ps-5' />
                                        </div>
                                    </div>
                                    <p className='bg-white p-3 text-muted rounded-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda iusto reiciendis deleniti</p>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="I've read and accept the"
                                        labelPlacement="end"
                                        className="me-1"
                                    />
                                    <Link>terms & condition</Link>
                                </div>

                                <div className="container text-center py-2 pb-4">
                                    <Button variant='contained' className='text-uppercase text-white px-3 px-md-2 py-3 me-2 bg-primaryColor'>Procced to paypal</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OurServices />
            </div>
        </>
    )
}
