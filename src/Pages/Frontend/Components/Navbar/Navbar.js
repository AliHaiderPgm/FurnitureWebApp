import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../Assets/Images/logo2.png'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';

export default function Navbar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-lightColor fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" >
          <img src={logo} alt="FURN-Logo" width="65" height="65" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" >Product</Link>
            </li>
            <li className="nav-item">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  className='w-100'
                />
              </Search>
            </li>
          </ul>
          <Link className='nav-link me-2 my-2 my-md-0'>My Account</Link>
          <button type="button" className="btn position-relative p-0 mb-4 mb-md-0 me-0 me-md-3">
            <ShoppingCartRoundedIcon />
            <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-primaryColor">
              0
              <span className="visually-hidden">
                Cart Items
              </span>
            </span>
          </button>

        </div>

      </div>
    </nav>
  )
}
