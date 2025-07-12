import { MenuItems_URL } from "./Constant";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{

    const [menu, setMenu]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu= async()=>{
        const data = await fetch(MenuItems_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setMenu(json.data);

    }

    return menu;
}

export default useRestaurantMenu;