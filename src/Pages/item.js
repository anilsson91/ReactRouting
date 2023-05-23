import React from 'react'
import { Link, useLoaderData, Outlet } from 'react-router-dom'
import { getItems } from './items'
import Drawer from '../components/Drawer'
import { Box, Container } from '@mui/material'


export const getItem = async (id) => {


    const itemArray = await getItems();

    const item = itemArray.find(item=>item.id==id);
    return item;
  
}

export async function loader({ params }) {
    const item = await getItem(params.itemId);
    return {item}
}

export function ItemContent(){
    const {item} = useLoaderData();
    return(<div><ul>
        <li>namn: {item.name}</li>
        <li>Kategori: {item.category}</li>
        <li>Pris: {item.price} kr</li>
    </ul>
    {item.items.length>0 ? 
        <div>
            <p>Includes</p>
            <ul>
                {item.items.map((item)=>{
                    return <li><Link to={'/items/' + item.id.toString()} state={{ title: item.name}}>{item.name}</Link></li>
                })}
            </ul>
        </div>
        
        : <></>} </div>)
}
export function LeftMenuList(){}

export default function Item() {
    
    const {item} = useLoaderData();
    return(<div><ul>
        <li>namn: {item.name}</li>
        <li>Kategori: {item.category}</li>
        <li>Pris: {item.price} kr</li>
    </ul>
    {item.items.length>0 ? 
        <div>
            <p>Includes</p>
            <ul>
                {item.items.map((item)=>{
                    return <li><Link to={'/items/' + item.id.toString()} state={{ title: item.name}}>{item.name}</Link></li>
                })}
            </ul>
        </div>
        
        : <></>} </div>)
}
