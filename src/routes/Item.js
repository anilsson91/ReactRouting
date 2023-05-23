import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getItems } from './Items'


export const getItem = async (id) => {


    const itemArray = await getItems();

    const item = itemArray.find(item=>item.id==id);
    return item;
  
}

export async function loader({ params }) {
    const item = await getItem(params.itemId);
    return {item}
}



export default function Item() {

    const {item} = useLoaderData();

  return (
    <div>
        <h2>{item.name}</h2>
        <ul>
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
            
            : <></>}
    </div>
  )
}
