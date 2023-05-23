
import './App.css';

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider, Route, Link as RouterLink, useMatches
} from "react-router-dom";

import Root from './routes/Root';
import Customers, { loader as customersLoader}  from './routes/Customers';
import Customer,  { loader as customerLoader}   from './routes/Customer';
//import Items,     { loader as itemsLoader}      from './routes/Items';
import Items, {loader as itemsLoader} from './Pages/items';
//import Item,      { loader as itemLoader}      from './routes/Item';
import Item,      { loader as itemLoader}      from './Pages/item';
import Orders from './routes/Orders';
import Order from './routes/Order';
import ErrorPage from './error-page';
//import ItemsLayout from './ItemsLayout';
import DynamicItemRoute from './routes/DynamicItemRoute';
import { Link } from '@mui/material';

import RootLayout from './Pages/rootLayout';
import EditItem from './Pages/editItem';

import ItemLayout from './Pages/itemLayout';




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/items",
        handle: {
          crumb: () => <Link component={RouterLink} to="items" underline="hover" color="inherit"><p>Items</p></Link>
        },
        children: [
          {
            index: true,
            element: <Items />,
            loader: itemsLoader
          },
          { 
            path: "/items/:itemId",
            element: <ItemLayout />,
            errorElement: <ErrorPage />,
            /*loader: itemLoader,*/
     
            children: [
              {
                index: true,
                element: <Item/>,
                loader: itemLoader,
                handle: {
                  crumb: (data) => {
                    console.log(data);
                    if(data != null) {
    
                    return (<Link component={RouterLink} to={data.item.id} underline="hover" color="inherit">{data.item.name}</Link>)
                    }
                  }
                },
              },
              {  
                  path: "/items/:itemId/edit",
                  id:4,
                  element: <h1>HELLO</h1>,
                  loader: itemLoader,
                  handle: {
                    crumb: (data) => {
                      console.log(data);
                     
      
                      return (<Link component={RouterLink} to={data.item.id} underline="hover" color="inherit">{"bla"}</Link>)
                      
                    }
                  },
                  
              }
            ]
          }
        ]
      }, 
      {
        path: "/customers",
        element: <h1>customers</h1>
      }
    ]
  }
]);




function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

