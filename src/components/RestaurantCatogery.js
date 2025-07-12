import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Box, Typography } from "@mui/material";
import Accordion from "./Accordion"
import { Button } from '@material-ui/core';
import { useState } from 'react';

const RestaurantCatogery =(props)=>{
   const data =props;
   const item =data?.data?.card?.card; 
   console.log(item)
   const [showItems, setShowItems]=useState(false);

   const handleClick = ()=>{
    setShowItems(!showItems);
   }
    return(
        <div>
            <Box margin={2} padding={2} width={6/12}>
            
              <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} sx={{cursor:"pointer"}} bgcolor={"#f2eeed"}
              onClick={handleClick}>
           
              <Typography variant="body2" textAlign={"left"}>{item.title} ({item.itemCards.length}) </Typography>
              <ArrowDropDownIcon sx={{textAlign:"right"}}/>
              </Box>
              
              {showItems && <Accordion menuItems={item?.itemCards}/> }
             </Box>
        </div>
    )

}

export default RestaurantCatogery;