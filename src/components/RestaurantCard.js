
import {Image_URL} from "../../utils/Constant";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const RestaurantCard=(props)=>{

    const {resData}=props;
    const {name, cuisines, avgRating, sla,cloudinaryImageId}=resData?.info
    return(
        <div>
            <div className="res-card">
            <Box sx={{ width: '300px', margin: '10px', flexShrink: 0 }}>
          
            <Card sx={{ height: '430px', display: 'flex', flexDirection: 'column' }}>                    
                    <img src={Image_URL+cloudinaryImageId} style={{ width:"auto", height: '200px' }}/>
                    <Box padding={2} sx={{ flexGrow: 1 }} >
                        <Typography variant="h5" component="h1">
                          {name}
                        </Typography>    
                    
                    
                        <Typography variant="body1" component="h4" sx={{ mt: 1 }}>
                        {cuisines.join(" ,")}
                        </Typography>
                    
                    
         
                        <Typography variant="body1" component="h4" sx={{ mt: 1 }}>
                            <Rating name="half-rating-read" defaultValue={avgRating} precision={0.5} readOnly size="small" paddingX={1}></Rating>{avgRating} Star
                        </Typography>
                  
                  
                        <Typography variant="body1" component="h4" paddingX={1} x={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                         <AccessTimeIcon size="small" />{sla.slaString} 
                        </Typography>
                    </Box>

                    
            </Card>
           
            </Box>
                </div>
        </div>
    )
}

export default RestaurantCard;