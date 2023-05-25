import React, {useState} from 'react'
import { Link, useLoaderData, Outlet } from 'react-router-dom'
import { getItems } from './items'
import Drawer from '../components/Drawer'
import { Box, Container } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



export default function ItemLayout() {
    
 const menuItems = [
    {
        text: "Edit",
        icon: <EditIcon/>,
        divider: false,
    }]

  return (
    <Box sx={{background:"#e8ebf2"}}>
        <Drawer menuItems = {menuItems} content={<Outlet/>}/>
    </Box>
  )
}
