import React, { useEffect } from "react";
import UserClass from "./UserClass";


 
    
class About extends React.Component{
    constructor(){
        super();
        console.log("Parent constructor is called");
    }
    componentDidMount(){
        console.log("parent componentDidMount is called");
    }
    render(){
        console.log("Parent render is called");
    return(
        <div>
            <h3> About us page............</h3>
            {/* <UserClass name={"Samyu"} location={"Bangalore"}/> */}
        </div>
    )
    }   
}

export default About;