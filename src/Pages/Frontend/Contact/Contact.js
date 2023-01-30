import React from 'react'
import Header from 'Pages/Frontend/Components/local/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailReply, faMobile } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

    return (
        <>
            <Header pageName='Contact' />
            <div className="container">
                <div className="row">
                    <div className="col py-5 p-3">
                        <iframe title='Google Maps' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.505295814151!2d73.07561025!3d31.431305199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1674663703224!5m2!1sen!2s" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-11 col-md-8 p-3">
                        <h1 className='text-uppercase fw-bold'>Get in touch</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div className="container">
                                            <div className="row">
                                                <div className="col ,m-0">
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Enter Message"
                                                        multiline
                                                        rows={10}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className='col-12 col-md-6'>
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Enter Your Name"
                                                        multiline
                                                        maxRows={4}
                                                    />
                                                </div>
                                                <div className='col-12 col-md-6'>
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Email"
                                                        multiline
                                                        maxRows={4}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Enter Subject"
                                                        multiline
                                                        maxRows={4}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <Button variant="outlined" className='uppercase py-4 px-5'>Send</Button>
                                                </div>
                                            </div>
                                        </div>

                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 pt-0 pt-md-5 mt-5">
                        <div className="container">
                            <div className="row px-4">
                                <div className="col-2 mx-0 mx-md-3">
                                    <FontAwesomeIcon icon={faHome} style={{fontSize:'36px'}}/>
                                </div>
                                <div className="col-8">
                                    <p className='fw-bold'>Buttonwood, California</p>
                                    <p className='text-muted'>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="row px-4">
                                <div className="col-2 mx-0 mx-md-3">
                                    <FontAwesomeIcon icon={faMobile} style={{fontSize:'36px'}}/>
                                </div>
                                <div className="col-8">
                                    <p className='fw-bold'>+1 390 2302 3829</p>
                                    <p className='text-muted'>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="row px-4">
                                <div className="col-2 mx-0 mx-md-3">
                                    <FontAwesomeIcon icon={faMailReply} style={{fontSize:'36px'}}/>
                                </div>
                                <div className="col-8">
                                    <p className='fw-bold'>support@furn.com</p>
                                    <p className='text-muted'>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
