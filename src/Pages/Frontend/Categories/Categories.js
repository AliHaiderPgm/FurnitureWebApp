import React, { useState } from 'react'
import Header from '../Components/local/Header'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import CustomCard from '../Components/local/CustomCard';

function valuetext(value) {
    return `${value}$`;
}
export default function Categories() {
    const cards = [
        "sofa1",
        "sofa2",
        "sofa3",
        "chair1",
        "chair2",
        "chair3",
        "table1",
        "table2",
        "table3"
    ]


    const [type, setType] = useState('')
    const handleTypeChange = (e) => {
        const newState = e.target.value
        setType(newState)
    }

    const [size, setSize] = useState()
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const [color, setColor] = useState('')
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const [price, setPrice] = useState('')
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const [sort, setSort] = useState('')
    const handleSortChange = (e) => {
        setSort(e.target.value)
    }

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Header pageName='Categories' />
            <div className="container pt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-uppercase'>Shop with us</h1>
                        <p className='text-muted'>Browse from 230 latest items</p>
                    </div>
                </div>
            </div>


            <div className="container ">
                <div className="row pt-5">
                    <div className="col-12 col-md-3">
                        <h5>Filter Product</h5>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="card p-4">
                                        <Box sx={{ minWidth: 120 }} className='my-2'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={type}
                                                    name='type'
                                                    label="Type"
                                                    onChange={handleTypeChange}
                                                >
                                                    <MenuItem value='' className='text-muted'>Type</MenuItem>
                                                    <MenuItem value='sofa'>Sofa</MenuItem>
                                                    <MenuItem value='table'>Table</MenuItem>
                                                    <MenuItem value='chair'>Chair</MenuItem>
                                                    <MenuItem value='bed'>Bed</MenuItem>
                                                    <MenuItem value='lightning'>Lightning</MenuItem>
                                                    <MenuItem value='decor'>Decor</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box sx={{ minWidth: 120 }} className='my-3'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={size || ''}
                                                    name="size"
                                                    label="Size"
                                                    onChange={handleSizeChange}
                                                >
                                                    <MenuItem value={0} className='text-muted'>Size</MenuItem>
                                                    <MenuItem value={2}>2.2ft</MenuItem>
                                                    <MenuItem value={5}>5.5ft</MenuItem>
                                                    <MenuItem value={8}>8.2ft</MenuItem>
                                                    <MenuItem value={10} >10.2ft</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box sx={{ minWidth: 120 }} className='my-2'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={color}
                                                    name='color'
                                                    label="Color"
                                                    onChange={handleColorChange}
                                                >
                                                    <MenuItem value='' className='text-muted'>Color</MenuItem>
                                                    <MenuItem value='White'>White</MenuItem>
                                                    <MenuItem value='Green'>Green</MenuItem>
                                                    <MenuItem value='Blue'>Blue</MenuItem>
                                                    <MenuItem value='SkyBlue'>Sky Blue</MenuItem>
                                                    <MenuItem value='Gray'>Gray</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box sx={{ minWidth: 120 }} className='my-3'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={price}
                                                    name="price"
                                                    label="Price"
                                                    onChange={handlePriceChange}
                                                >
                                                    <MenuItem value={''} className='text-muted'>Price</MenuItem>
                                                    <MenuItem value={'$10 to $20'}>$10 to $20</MenuItem>
                                                    <MenuItem value={'$20 to $30'}>$20 to $30</MenuItem>
                                                    <MenuItem value={'$50 to $80'}>$50 to $80</MenuItem>
                                                    <MenuItem value={'$100 to $120'}>$100 to $120</MenuItem>
                                                    <MenuItem value={'$300 to $200'}>$300 to $200</MenuItem>
                                                    <MenuItem value={'$500 to $600'}>$500 to $600</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col p-4">
                                    <h5>Price Range</h5>
                                    <Box sx={{ maxWidth: 500 }}>
                                        <Slider
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={0}
                                            max={500}
                                        />
                                    </Box>
                                    <p>Price: $0 to $500</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card p-4">
                                        <h5>Latest Product</h5>
                                        <FormGroup>
                                            <FormControlLabel
                                                label="Any"
                                                control={<Checkbox />}
                                            />
                                            <FormControlLabel
                                                label="Today"
                                                control={<Checkbox />}
                                            />
                                            <FormControlLabel
                                                label="Last 2 Days"
                                                control={<Checkbox />}
                                            />
                                            <FormControlLabel
                                                label="Last 5 Days"
                                                control={<Checkbox />}
                                            />
                                            <FormControlLabel
                                                label="Last 10 Days"
                                                control={<Checkbox />}
                                            />
                                            <FormControlLabel
                                                label="Last 15 Days"
                                                control={<Checkbox />}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 my-3 overflow-x-hidden">
                        <div className="row flex-row">
                            <div className="col-6">
                                <p className='pt-3'>39,728 Products Found</p>
                            </div>
                            <div className="col-2 offset-2 offset-lg-4">
                                <Box sx={{ minWidth: 100 }} className='my-3'>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sort}
                                            name="sort"
                                            label="Sort by"
                                            onChange={handleSortChange}
                                        >
                                            <MenuItem value={''} className='text-muted'>Sort by</MenuItem>
                                            <MenuItem value={'$10 to $20'}>Sofa</MenuItem>
                                            <MenuItem value={'$20 to $30'}>Bed</MenuItem>
                                            <MenuItem value={'$50 to $80'}>Chair</MenuItem>
                                            <MenuItem value={'$100 to $120'}>Table</MenuItem>
                                            <MenuItem value={'$300 to $200'}>Lights</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <div className="row">
                                {
                                    cards.map((card,i)=>{
                                        return (
                                            <div className='col-12 col-md-5 col-lg-4' key={i}>
                                                <CustomCard image={card}/>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
