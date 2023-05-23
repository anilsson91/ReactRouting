import React from 'react'
import {Link, useParams } from "react-router-dom";
export default function Orders() {

  let params = useParams();
  console.log(params["*"]); // "one/two"
  
  return (
    <div>Orders</div>
  )
}
