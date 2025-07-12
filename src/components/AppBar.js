import * as React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from "react-router";
import useOnlineStatus from '../../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
const [buttonStatus, setButtonStatus]=useState("Log in");

const onlineStatus= useOnlineStatus();

 const cartItems = useSelector((store)=>store.cart.items);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#eef2ac"}}>
        <Toolbar>
         <Box  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
             <FastfoodIcon fontSize='large'></FastfoodIcon>
         </Box>
             <Box>
                    <Typography variant="body2" fontWeight={"BloodtypeSharp"}>OnlineStatus: {onlineStatus ? "🟢" : "🔴"} </Typography>
                </Box>

          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                
                <Button>
                    <Link to="/" style={{ textDecoration: 'none' }} >Home</Link>
                </Button>
                <Button>
                    <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
                </Button>
                <Button>
                <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link>
                </Button>
                <Button>
                <Link to="/grocery" style={{ textDecoration: 'none' }}>Grocery</Link>
                </Button>
                <Button>
                <Link to="/cart" style={{ textDecoration: 'none' }}>Cart ({cartItems.length} Items) </Link>
                </Button>
          </Typography>
          <Button color="inherit" onClick={()=>{buttonStatus==="Log in" ? setButtonStatus("Log Out") : setButtonStatus("Log in")}}>{buttonStatus}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}