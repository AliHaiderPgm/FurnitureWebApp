import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Card } from 'antd';

// images
import sofa1 from 'Assets/Images/sofa-1.jpg'
import sofa2 from 'Assets/Images/sofa-2.jpg'
import sofa3 from 'Assets/Images/sofa-3.jpg'
import table1 from 'Assets/Images/table-1.jpg'
import table2 from 'Assets/Images/table-2.jpg'
import table3 from 'Assets/Images/table-3.jpg'
import chair1 from 'Assets/Images/chair-1.jpg'
import chair2 from 'Assets/Images/chair-2.jpg'
import chair3 from 'Assets/Images/chair-3.jpg'
import bed1 from 'Assets/Images/bed-1.jpg'
import bed2 from 'Assets/Images/bed-2.jpg'
import bed3 from 'Assets/Images/bed-3.jpg'
import light1 from 'Assets/Images/lights-1.jpg'
import light2 from 'Assets/Images/light-2.jpg'
import light3 from 'Assets/Images/light-3.jpg'
import decor1 from 'Assets/Images/decor-1.jpg'
import decor2 from 'Assets/Images/decor-2.jpg'
import decor3 from 'Assets/Images/decor-3.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs className='offset-0 offset-md-1 offset-lg-3' value={value} onChange={handleChange} aria-label="basic tabs example" textColor='primary' indicatorColor="primary" variant="scrollable" scrollButtons={false}>
                            <Tab label="Sofa" {...a11yProps(0)} />
                            <Tab label="Table" {...a11yProps(1)} />
                            <Tab label="Chair" {...a11yProps(2)} />
                            <Tab label="Bed" {...a11yProps(3)} />
                            <Tab label="Lightning" {...a11yProps(4)} />
                            <Tab label="Decore" {...a11yProps(5)} />
                        </Tabs>
                </Box>

                {/* Sofa */}
                <TabPanel value={value} index={0}>
                    <div className="container">
                        <div className="row g-3 offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={sofa1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={sofa2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={sofa3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Table */}
                <TabPanel value={value} index={1}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={table1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={table2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={table3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Chair */}
                <TabPanel value={value} index={2}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={chair1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={chair2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={chair3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Bed */}
                <TabPanel value={value} index={3}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={bed1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={bed2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={bed3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Lights */}
                <TabPanel value={value} index={4}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={light1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={light2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={light3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Decor */}
                <TabPanel value={value} index={5}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={decor1} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={decor2} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <Card bordered={false}
                                    style={{ maxWidth:'100%' }}
                                    hoverable
                                    cover={<img alt="Sofa" src={decor3} height='205' style={{ objectFit: 'cover' }} />}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorem? <br />
                                    <span className='priceColor'>$367</span>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </>
    );
}