import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

import useRestaurantMenu from "../../utils/useRestaurantMenu"
import RestaurantCatogery from "./RestaurantCatogery";
import { Box, Typography } from "@mui/material";

const RestaurantMenu =()=>{
    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <ShimmerUI/>

    const {text}=resInfo?.cards[0]?.card?.card
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
   // console.log(categories);
//console.log(categories[1]?.card?.card?.itemCards)

    return(
        <Box textAlign={"center"}> 
           <Typography variant="h6" marginX={2} padding={3}>
              {text}
           </Typography>
            {/* {itemCards.map(items=><li key={items.card.info.id}> {items.card.info.name} - Rs {items.card.info.price/100 || items.card.info.defaultPrice/100}</li>)} */}
            <Box>
            {categories.map(category=><RestaurantCatogery data={category}/>)}
            </Box>
        </Box>
    )
}

export default RestaurantMenu;