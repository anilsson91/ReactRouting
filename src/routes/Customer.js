import React from 'react'
import {useLoaderData} from 'react-router-dom'

export const getCustomer = async (id) => {

    const customerArray =  [

        {id:1, name:"Anton", age: 32, email: "anton@gmail.com",  street: "Taskvägen 4", zipCode: "35221", city:"Växjö"},
        {id: 2, name:"Stefan", age: 30, email: "stefan@gmail.com",  street: "Baldergatan 32", zipCode: "35421", city:"Växjö"},
        {id: 3, name:"Henrik", age: 26, email: "henrik@gmail.com", street: "Tegnertorget 2", zipCode: "64121", city:"Växjö"},
        {id: 4, name:"Conny", age: 37, email: "conny@gmail.com",  street: "Helixvägen 31", zipCode: "92321", city:"Växjö"},
        
    ]

    const customer = customerArray.find(customer=>customer.name===id);
    return customer;
  
}
export async function loader({params}) {
    const customer = await getCustomer(params.id);
    return { customer };
}

export default function Customer() {
    const { customer } = useLoaderData();
  

  return (
    <div>
        <ul>
            
            <li>NAME: {customer.name}</li>
            <li>Email: {customer.email}</li>
            <li>street: {customer.street} </li>
            <li>Zipcode: {customer.zipCode} </li>
            <li>City: {customer.city} </li>
        </ul>
    </div>
  )
}
