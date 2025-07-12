// import React, { useEffect } from "react";

// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("Child constructor is called");
//         this.state={
//             login:"Sam",
//             id:"12345",
//         }
//     }
   
//   async  componentDidMount(){
//         console.log("Child componentDidMount is called");
//         const data =  await fetch("https://api.github.com/users/Saisamyukthagogula");
//         const json =  await data.json();
//         this.setState({login:json.login , id: json.id})
       
//     }

//     componentDidUpdate(prevState){
//         if(this.state.login !=prevState.login){
//             console.log("ComponentDidUpdate is called")
//         }
//        this.timer= setInterval(()=>{console.log("Interval is called")},1000);
//     }

//     componentWillUnmount(){
//         console.log("componentWillUnmount is called")
//         clearInterval(this.timer)
//     }
    
//     render(){
//         console.log("Child render is called");
//         const {name, location} =this.props;
//         const {login , id}=this.state;
//         return(
//             <div>
//                 <h2>User Details</h2>
//                 <h3>Name: {name}</h3>
//                 <h3>Location: {location}</h3>
//                 <h4>{login}</h4>
//                 <h4>{id}</h4>
//             </div>
//         )
//     }

// }

// export default UserClass;