import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomCard from '../local/CustomCard';


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
                                <CustomCard image="sofa1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="sofa2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="sofa3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Table */}
                <TabPanel value={value} index={1}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard image="table1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="table2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="table3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Chair */}
                <TabPanel value={value} index={2}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard image="chair1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="chair2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="chair3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Bed */}
                <TabPanel value={value} index={3}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard image="bed1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="bed2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="bed3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Lights */}
                <TabPanel value={value} index={4}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard image="light1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="light2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="light3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Decor */}
                <TabPanel value={value} index={5}>
                    <div className="container">
                        <div className="row g-3  offset-md-0">
                            <div className="col-sm-12 col-md-5 col-lg-4">
                                <CustomCard image="decor1" />
                            </div>
                            <div className="col-sm-12 col-md-5 offset-sm-0 offset-md-2 offset-lg-0 col-lg-4">
                                <CustomCard image="decor2" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <CustomCard image="decor3" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </>
    );
}