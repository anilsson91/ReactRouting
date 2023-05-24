import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Breadcrumbs2 from '../components/Breadcrumbs2';

export default function RootLayout() {

  

  return (
    <>
    <Navbar/>
    <Breadcrumbs/>
    <Outlet />
    </>
  )
}
