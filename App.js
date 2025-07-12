import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import UserClass from "./src/components/UserClass.js";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Contact from "./src/components/Contact.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ButtonAppBar from "./src/components/AppBar.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./src/components/Cart.js";




const Grocery = lazy(()=> import ("./src/components/Grocery.js"));

const App =()=>{
    return(
        <div>
        <Provider store={appStore}> 
          <ButtonAppBar/>
          <Outlet/> 
          </Provider>
        </div>
    )

}


const appRouter = createBrowserRouter([
        { path:"/",
          element:<App/>,
          children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact/>,           
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading......</h1>}> <Grocery/> </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>,           
            },
          ],
          errorElement: <Error />
        },
        
])


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>); 
