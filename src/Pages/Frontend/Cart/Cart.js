import React, { useEffect, useState } from 'react'
import Header from '../Components/local/Header'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { message, Popconfirm } from 'antd';

export default function Cart() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const [items, setItems] = useState([])
  const getData = () => {
    let items = localStorage.getItem('items')
    if (items === null) {
      setItems([])
    }
    else {
      let itemsObj = JSON.parse(items)
      setItems(itemsObj)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const handleTotalCount = (e) => {
    const array = JSON.parse(localStorage.getItem('items'))
    const objToUpdate = array.find(obj => obj.id === e.id)
    if (e.name === 'increment') {
      objToUpdate.number++
    }
    else {
      objToUpdate.number-- <= 1 ? objToUpdate.number = 1 : objToUpdate.number--
    }
    localStorage.setItem('items', JSON.stringify(array))
    getData()
  }
  
  const confirm = (e) => {
    let array = JSON.parse(localStorage.getItem('items'));
    array = array.filter(obj => obj.id !== e.id)
    localStorage.setItem('items', JSON.stringify(array));
    getData()
    message.success('Deleted');
  };
  return (
    <>
      <Header pageName="Cart" />
      {
        items.length === 0 ?
          <div className="container py-5">
            <div className="row text-center py-5">
              <h1>Nothing in cart</h1>
            </div>
          </div>
          :
          <>
            <div className="container pt-5">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell >Price</StyledTableCell>
                      <StyledTableCell >Quantity</StyledTableCell>
                      <StyledTableCell align="right">Total</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item) => (
                      <StyledTableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell component="th" scope="row">
                          <div className="col-7 d-flex align-items-center">
                            <img src={item.img} alt="Added to cart product" className='img-fluid w-25' style={{ objectFit: 'cover' }} />
                            <p className='text-muted p-3'>{item.desc}</p>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell >{item.price}$</StyledTableCell>
                        <StyledTableCell >
                          <div className="col-3 d-flex align-items-start p-0 m-0 justify-content-center flex-column">
                            <Button variant='outlined' size="small" onClick={() => handleTotalCount({ id: item.id, name: 'decrement' })}>-</Button>
                            <div className=" border py-2 px-4">{item.number}</div>
                            <Button variant='outlined' size="small" onClick={() => handleTotalCount({ id: item.id, name: 'increment' })}>+</Button>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="right" className="fw-bold">{item.price * item.number}$</StyledTableCell>

                        <StyledTableCell align="right">
                          <Popconfirm
                            placement="topRight"
                            title="Are your sure?"
                            onConfirm={()=> confirm({ id: item.id })}
                            okText="Yes"
                            cancelText="No"
                          >
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ fontSize: "17px", cursor: 'pointer' }}
                              />
                          </Popconfirm>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
      }

    </>
  )
}
