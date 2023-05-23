import React from 'react'
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import { useNavigate, redirect } from 'react-router-dom';


export default function Table({rows, cols}) {
  
    const navigate = useNavigate();
    const handleRowclick = (e, b)=>{
        navigate("/items/"+e[0]);
    }

    const options = {
        filterType: 'checkbox',
        onRowClick: (e, b)=>handleRowclick(e, b)
      };
      
  return (
   <div>
   <MUIDataTable
    title={"TEST"}
    data={rows}
    columns={cols}
    options={options}
/>
</div>

  )
}
