import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Body = ()=>{

    const [restaurantList, setRestaurantList]= useState();
    const [filteredRestaurant, setFilteredRestaurant]=useState();
    const [searchText, setSearchText]=useState('')

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.69115592794968&lng=77.59852096438408&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData= await data.json();
    //console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

const onlineStatus = useOnlineStatus();

if(onlineStatus===false) return(
    <h1>
        Looks like you are offline.....Please check your connection
    </h1>
);

return filteredRestaurant==null ? <ShimmerUI /> :(
        <div>
            
                <div className="search" style={{paddingTop:"30px"}}>
                {/* <input type="text"  className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"  onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/> */}
                {/* <button onClick={()=>{
                                        const result= restaurantList.filter((res)=> {return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
                                        setFilteredRestaurant(result)
                                        }}>Search</button> */}
                                         <InputBase
                                            sx={{ ml: 2, flex: 1 }}
                                            placeholder="Search Restaurants"
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                            onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}
                                            
                                        />
                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                                        onClick={()=>{const result= restaurantList.filter((res)=> {return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
                                        setFilteredRestaurant(result)
                                        }}>
                                            <SearchIcon />
                                        </IconButton>

               

                <button onClick={()=>{
                    const result = filteredRestaurant.filter(res=> res.info.avgRating>4)
                    setFilteredRestaurant(result)
                }}>Top Rated Restaurant</button>
             </div>

            <div className="res-container">
         <Container maxWidth={"lg"} sx={{flexWrap:"wrap"}}>
            
       
         <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1}>
              {filteredRestaurant.map(res=> <Link key={res.info.id} to={"/restaurant/"+ res.info.id} style={{ textDecoration: 'none' }}><RestaurantCard  resData={res}/></Link>)}
         </Box>
     
        </Container>
            </div>
           
        </div>
    )
}

export default Body;