import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import Item from './Item';
import DynamicLinks from '../components/Breadcrumbs';

export const getItems = async() => {

  return [
    {
      id: 1,
      name: "Kingston FURY Beast DDR4 3200MHz 16GB",
      category: "ram",
      price: 600,
      items: [],
    },
    {
      id: 2,
      name: "Montech X3 Glass Svart",
      category: "chassi",
      price: "999",
      items: [],
    },
    {
      id: 3,
      name: "ASUS ROG Strix Aura 1000W",
      category: "nätaggregat",
      price: "2889",
      items: [],
    },
    {
      id: 4,
      name: "ASUS ROG Strix B550-F Gaming",
      category: "moderkort",
      price: "2479",
      items: [],
    },
    {
      id: 5,
      name: "AMD Ryzen 7 7800X3D 4.2GHz 104MB",
      category: "processor",
      price: "3299",
      items: [],
    },
    {
      id: 6,
      name: "AMD Radeon RX 6950 XT MBA",
      category: "grafikkort",
      price: "6299",
      items: [],
    },
    {
      id: 7,
      name: "PNY CS900 SATA 2TB",
      category: "hårddisk",
      price: "1229",
      items: [],
    },
    {
      id: 8,
      name: "Razor D5",
      category: "mus",
      price: "800",
      items: [],
    },
    {
      id: 9,
      name: "Logitech E555",
      category: "tangentbort",
      price: "979",
      items: [],
    },
    {
      id: 10,
      name: "Logitech E555",
      category: "tangentbort",
      price: "979",
      items: [],
    },
    {
      id: 11,
      name: "Razor G2121",
      category: "headset",
      price: "569",
      items: [],
    },
    {
      id: 12,
      name: "Lenovo Z600c7 ",
      category: "computer",
      price: "9999",
      items: [ {
        id: 1,
        name: "Kingston FURY Beast DDR4 3200MHz 16GB",
        category: "ram",
        price: 600,
        items: [],
      },
      {
        id: 2,
        name: "Montech X3 Glass Svart",
        category: "chassi",
        price: "999",
        items: [],
      },
      {
        id: 3,
        name: "ASUS ROG Strix Aura 1000W",
        category: "nätaggregat",
        price: "2889",
        items: [],
      },
      {
        id: 4,
        name: "ASUS ROG Strix B550-F Gaming",
        category: "moderkort",
        price: "2479",
        items: [],
      },
      {
        id: 5,
        name: "AMD Ryzen 7 7800X3D 4.2GHz 104MB",
        category: "processor",
        price: "3299",
        items: [],
      },
      {
        id: 6,
        name: "AMD Radeon RX 6950 XT MBA",
        category: "grafikkort",
        price: "6299",
        items: [],
      },
      {
        id: 7,
        name: "PNY CS900 SATA 2TB",
        category: "hårddisk",
        price: "1229",
        items: [],
      }]
    },
    {
      id: 13,
      name: "Lenovo Z600c7 inklusinve mus, tangentbord, headet",
      category: "computer package",
      price: "6299",
      items: [  {
        id: 1,
        name: "Kingston FURY Beast DDR4 3200MHz 16GB",
        category: "ram",
        price: 600,
        items: [],
      },
      {
        id: 2,
        name: "Montech X3 Glass Svart",
        category: "chassi",
        price: "999",
        items: [],
      },
      {
        id: 3,
        name: "ASUS ROG Strix Aura 1000W",
        category: "nätaggregat",
        price: "2889",
        items: [],
      },
      {
        id: 4,
        name: "ASUS ROG Strix B550-F Gaming",
        category: "moderkort",
        price: "2479",
        items: [],
      },
      {
        id: 5,
        name: "AMD Ryzen 7 7800X3D 4.2GHz 104MB",
        category: "processor",
        price: "3299",
        items: [],
      },
      {
        id: 6,
        name: "AMD Radeon RX 6950 XT MBA",
        category: "grafikkort",
        price: "6299",
        items: [],
      },
      {
        id: 7,
        name: "PNY CS900 SATA 2TB",
        category: "hårddisk",
        price: "1229",
        items: [],
      },
      {
        id: 8,
        name: "Razor D5",
        category: "mus",
        price: "800",
        items: [],
      },
      {
        id: 9,
        name: "Logitech E555",
        category: "tangentbort",
        price: "979",
        items: [],
      },
      {
        id: 10,
        name: "Logitech E555",
        category: "tangentbort",
        price: "979",
        items: [],
      },
      {
        id: 11,
        name: "Razor G2121",
        category: "headset",
        price: "569",
        items: [],
      }],
    }

   
   
    
  ]

}

export async function loader() {
  const items = await getItems();
  console.log("ITEMS_LOSADER")
  return { items };
}


function Items() {

  const { items } = useLoaderData();

  return (
    <>
       
    <h1>Items</h1>
    <ul>
    {items.map((item)=> 
                <li key={item.id}><Link to={ item.id.toString()} state={{ title: item.name}}>{item.name} - ( {item.category} ) - ({item.price} kr) </Link></li>
            )}
    </ul>
    
    </>
  )
}

export default Items