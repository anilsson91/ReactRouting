import React from 'react';
import { useMatches, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Item from './Item';

export default function DynamicItemRoute() {

    let match = useMatches();
    console.log(match);

    

  return (
    <>
    <Item></Item>
    <h1>HELLO FROM DYNAMIC</h1>
    </>
  )
}
