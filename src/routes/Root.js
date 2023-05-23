import React, {useState, useEffect} from 'react'
import { Outlet,Link, useLocation} from "react-router-dom";
import Breadcrumbs from '../components/Breadcrumbs';
import Navbar from '../components/Navbar';
const style = {
    top: {
        width: "100%", 
        backgroundColor: "red"
    }, side: {
        width: "25%",
         height: "100%", 
         backgroundColor: "blue"
    }, main: {
        width: "75%",
         height: "100%", 
         backgroundColor: "yellow"
    }
}



export default function Root() {
/*    let location = useLocation();

    const [historyStack, setHistoryStack] = useState([]);


    useEffect(() => {
     
   
    if(location.state!=null) {

      setHistoryStack([...historyStack, {title: location.state.title, url: location.pathname }]);
      
      console.log(historyStack.url)
    }
      


    }, [location]);
    */
  return (
    <>
   <Navbar/>
    <div style={{display:"flex", height:"100vh"} }>
    <div id ="side" style={style.side}>
    <ul>
            <li>
              <Link to={`customers`}>Cutomers</Link>
            </li>
            <li>
              <Link to={`items`}>Items</Link>
            </li>
            <li>
              <Link to={`orders`}>Orders</Link>
            </li>
          </ul>
    </div>
    <div id="main" style={style.main}>
        <div style={{display:"flex", height:"90px", background:"purple"}} >
        <Breadcrumbs/>
            {/*historyStack.map((item)=> 
                <p><Link to={item.url}>{item.title}</Link></p>
  )*/}

        </div>
        <Outlet/>
    </div>
    </div>

    </>
  )
}
