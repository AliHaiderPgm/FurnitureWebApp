import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, Button, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

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
                <Box sx={{ p: 3, }}>
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

    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione voluptates praesentium dolore, quas illum, quisquam, provident perferendis unde perspiciatis rem. Sit accusantium libero recusandae et ut harum in aspernatur enim molestiae omnis voluptate expedita vitae, quis commodi earum nesciunt ullam assumenda? Ad voluptatum, doloribus architecto ea rerum officia molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veniam amet, cumque nisi distinctio corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur distinctio, perspiciatis asperiores natus numquam nostrum beatae aliquid omnis nihil. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit optio tenetur harum expedita odio repellat error ducimus, aperiam consequatur, officia ipsam. Dolore quod obcaecati at recusandae quas iure consectetur quasi voluptates blanditiis, porro ea neque."
    const specification = {
        width: '128mm',
        height: '508mm',
        depth: '85mm',
        weight: '52gm',
        qualityCheck: 'yes',
        freshnessDuration: '03days',
        whenPacked: 'without touch of hand',
        eachBoxContain: '1pc'
    }
    const comments = [
        {
            userName: 'Black Ruiz',
            date: "12th Feb, 2017 at 05:56 pm",
            userImg: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione voluptates praesentium dolore, quas illum, quisquam, provident perferendis unde perspiciatis rem. Sit accusantium libero recusandae et ut harum in aspernatur enim molestiae omnis voluptate expedita vitae,',
            id: 'comment1'
        },
        {
            userName: 'Black Ruiz',
            date: "12th Feb, 2017 at 05:56 pm",
            userImg: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione voluptates praesentium dolore, quas illum, quisquam, provident perferendis unde perspiciatis rem. Sit accusantium libero recusandae et ut harum in aspernatur enim molestiae omnis voluptate expedita vitae,',
            id: 'comment2'
        },
        {
            userName: 'Black Ruiz',
            date: "12th Feb, 2017 at 05:56 pm",
            userImg: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione voluptates praesentium dolore, quas illum, quisquam, provident perferendis unde perspiciatis rem. Sit accusantium libero recusandae et ut harum in aspernatur enim molestiae omnis voluptate expedita vitae,',
            id: 'comment3'
        },
    ]

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            "& .MuiTabs-indicator": { display: 'none' },
                            "& .MuiTab-root": { backgroundColor: "fff", borderRadius: '30px', transition: 'all 0.45s' },
                            "& .MuiTab-root.Mui-selected": { backgroundColor: '#fd8f5e', color: '#fff', border: '1px solid #fd8f5e' }
                        }}
                        variant="scrollable"
                        scrollButtons={false}>
                        <Tab label="Description" {...a11yProps(0)} sx={{ border: '1px solid #edede9', marginRight: 1 }} />
                        <Tab label="Specification" {...a11yProps(1)} sx={{ border: '1px solid #edede9', marginRight: 1 }} />
                        <Tab label="Comments" {...a11yProps(2)} sx={{ border: '1px solid #edede9', marginRight: 1 }} />
                        <Tab label="Reviews" {...a11yProps(3)} sx={{ border: '1px solid #edede9' }} />
                    </Tabs>
                </Box>
                {/* Description */}
                <TabPanel value={value} index={0} className='text-muted'>
                    {description}
                </TabPanel>

                {/* Specification */}
                <TabPanel value={value} index={1}>
                    <div className="container" >
                        <div className="row text-muted">
                            <div className="col-6 p-0">
                                &nbsp;&nbsp;&nbsp;&nbsp;Width
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Height
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Depth
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Weight
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Quality checking
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Freshness duration
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;When packing
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;Each box contain
                                <hr />
                            </div>
                            <div className="col-6 p-0">
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.width}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.height}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.depth}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.weight}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.qualityCheck}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.freshnessDuration}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.whenPacked}
                                <hr />
                                &nbsp;&nbsp;&nbsp;&nbsp;{specification.eachBoxContain}
                                <hr />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Comments */}
                <TabPanel value={value} index={2}>
                    <div className="container">
                        <div className="row g-1">
                            <div className="col-12 col-md-6">
                                <div className="container my-3" >
                                    {comments.map((comment) => {
                                        return (
                                            <div className="row mb-4" key={comment.id}>
                                                <div className="col-12 ms-5 mb-2 position-relative">
                                                    <Avatar
                                                        alt={comment.userName}
                                                        src={comment.userImg}
                                                        sx={{
                                                            position: 'absolute',
                                                            left: -40,
                                                            top: 5
                                                        }} />
                                                    {comment.userName}<br />
                                                    {comment.date}
                                                    <Button
                                                        variant='outlined'
                                                        className='rounded-pill'
                                                        sx={{
                                                            position: 'absolute',
                                                            right: 60,
                                                            top: 5
                                                        }}
                                                    >
                                                        Reply
                                                    </Button>
                                                </div>
                                                <div className="col-12 text-muted">
                                                    {comment.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="fw-bold">Post a comment</h1>
                                            <TextField className='mb-2' fullWidth label="Full Name" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Email" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Phone Number" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Message" variant="outlined" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col d-flex justify-content-end">
                                            <Button variant="contained bg-primaryColor text-light" className="text-uppercase py-3 px-5">Submit Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Review */}
                <TabPanel value={value} index={3}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center mb-5">
                                    <div
                                        className="col-6 text-center py-5"
                                        style={{ backgroundColor: '#FAF9F6' }}
                                    >
                                        <h3>Overall</h3>
                                        <h1 className='text-primary fw-bold'>4.0</h1>
                                        <p>(03 Reviews)</p>
                                    </div>
                                    <div className="col-6">
                                        <h5 className='fw-bold'>Based on Reviews</h5>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            01
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            01
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            00
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            01
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faEmptyStar} className="text-warning" />
                                            00
                                        </p>
                                    </div>
                                </div>
                                {comments.map((comment) => {
                                    return (
                                        <div className="row mb-4" key={comment.id}>
                                            <div className="col-12 ms-5 mb-3 position-relative">
                                                <Avatar
                                                    alt={comment.userName}
                                                    src={comment.userImg}
                                                    sx={{
                                                        position: 'absolute',
                                                        left: -40,
                                                        top: 5
                                                    }} />
                                                {comment.userName}<br />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            </div>
                                            <div className="col-12 text-muted">
                                                {comment.comment}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="fw-bold">Add a review</h1>
                                            <p>Your Rating: Outstanding</p>
                                            <TextField className='mb-2' fullWidth label="Full Name" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Email" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Phone Number" variant="outlined" />
                                            <TextField className='mb-2' fullWidth label="Message" variant="outlined" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col d-flex justify-content-end">
                                            <Button variant="contained bg-primaryColor text-light" className="text-uppercase py-3 px-5">Submit Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </>
    );
}