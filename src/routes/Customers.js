import React from 'react'
import {Link, Outlet, useLoaderData} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'


export const getCustomers = async () => {
    return [

        {id:1, name:"Anton", age: 32},
        {id: 2, name:"Stefan", age: 30},
        {id: 3, name:"Henrik", age: 26},
        {id: 4, name:"Conny", age: 37},
        
    ]
}
export async function loader() {
    const customers = await getCustomers();
    return { customers };
}

export default function Customers() {

    const { customers } = useLoaderData();


  return (
    <>
    <Breadcrumbs/>
        <h2>Customers</h2>
        <ul>
            {customers.map((customer)=> 
                <li key={customer.id}><Link to={customer.name}> {customer.name}</Link></li>
            )}
        </ul>
    </>
  )
}
