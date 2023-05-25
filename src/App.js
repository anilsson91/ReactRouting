
import './App.css';

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider, Route, Link as RouterLink, useMatches
} from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
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
import { red } from '@mui/material/colors';

import { ThemeOptions } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/items",
        handle: {
          crumb: (() => {
         // return <Link component={RouterLink} to="items" underline="hover" color="inherit"><p>Items</p></Link>;
         return ({crumbTitle: "Items"}); 
        })
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
                    //return (<Link component={RouterLink} to={data.item.id} underline="hover" color="inherit">{data.item.name}</Link>)
                    return ({crumbTitle: data.item.name});
                    
                  }
                },
              },
              {  
                  path: "/items/:itemId/edit",
                  id:4,
                  element: <EditItem/>,
                  loader: itemLoader,
                  handle: {
                    crumb: (data) => {
    
                      //return (<Link component={RouterLink} to={data.item.id} underline="hover" color="inherit">{"bla"}</Link>)
                      return ({crumbTitle: "edit"});
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



 const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#5893df',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },

   

    
};



const theme = createTheme(
  themeOptions);



function App() {
  return (
    <div className="App">
          <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

