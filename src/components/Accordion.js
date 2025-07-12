import { Box, Typography } from "@mui/material";
import StarRateIcon from '@material-ui/icons/StarRate';
import { Image_URL } from "../../utils/Constant"; 
import Container from '@mui/material/Container';
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";


const Accordion =({menuItems})=>{
    //console.log(item)
    // const menuItems=item?.itemCards
    const dispatch = useDispatch();
    const handleAddItem =()=>{
     dispatch(addItem("Pizza"))
    }
    console.log(handleAddItem);
 
    return(
        <div> 
              <Container>
              <Box>
              {menuItems.map(i=><Box marginY={2} paddingY={2} borderBottom={1} borderColor={"#f2eeed"} width={"auto"} display={"flex"} justifyContent={"space-between"}>
                <Box sx={{textAlign: "left"}}>
                <Typography variant="body2" paddingY={2}>{i?.card?.info?.name}</Typography>
                <Typography variant="paragraph"paddingY={1}>₹{i?.card?.info?.price/100 ||i?.card?.info?.defaultPrice/100  }</Typography>
                <Box paddingTop={1}><StarRateIcon fontSize="small" paddingTop={3} />{i?.card?.info?.ratings?.aggregatedRating?.rating}</Box></Box>
                <Box> 
                   <button style={{position:"absolute", marginTop:"120px", marginLeft:"55px", backgroundColor:"white", borderRadius:"10px"}} onClick={handleAddItem}>Add +</button>
                    <img width="150" src={Image_URL + i?.card?.info?.imageId}/>
                </Box>
                </Box>)}
           
             </Box>
           
             </Container>
        </div>
    )

}

export default Accordion;