import { use, useState } from "react"

const Contact = ()=>{

    // const [items, setItems]= useState([])
    // const [displayItmes, setDisplayItems] = useState(items)
    // const handleClick = () => {
    //     setDisplayItems([ items])
       
    //   };
    return(
        // <div>
        //     {/* {items1.map((item) =><li>{item}</li>)} */}
        //     <br/>
        //     Please Enter Items : <input type="text" onChange={(e)=>{setItems(e.target.value)}} value={items} ></input><br/><br/>
        //     <button onClick={handleClick}>Click me to display items</button>
        //     {displayItmes.map(item=><li>{item}</li>)}                

        // </div>
        <div>
            <h4>Contact Us</h4>
            <input type="text"></input><br></br><br></br>
            <input type="text"></input><br></br><br></br>
            <button type="submit">Submit</button>
        </div>
    )

}

export default Contact;
