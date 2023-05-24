import React, {useState, useEffect} from 'react'
import { useLocation, Link as RouterLink , useMatches, matchPath, useId} from 'react-router-dom';
import {routes} from "../App"
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import { Link } from '@mui/material';
import {Container} from '@mui/material';

export default function Breadcrumbs() {
  const[testArr, setTestArr] = useState([]);  
  const[testArr2, setTestArr2] = useState([]);  

  let location = useLocation();
  let matches = useMatches();

   console.log(matches)
   
  

   useEffect(()=>{

    matches.forEach((match)=>{

      if(Boolean(match.handle?.crumb)){
        console.log(match.handle.crumb(match.data))
        let arrCopy = [...testArr];

        for(let a = arrCopy.length-1; a >= 0; a--){
          
          /*FEL-> Matchar mot enstaka paths. kolla på etta imorn.
          uppdate: kan funka ändå. problemet verkar vara attden inte renderar rätt. consolLOGGAS RÄTT
          */
          if(arrCopy[a].pathname == match.pathname){
            arrCopy.splice(a, arrCopy.length);
            break;
          }

        }
        arrCopy.push({crumbTitle: match.handle.crumb(match.data), pathname: match.pathname});
        console.log(arrCopy)
        setTestArr(arrCopy);
      }

   });

   
  

   },[matches]);
   
   console.log(testArr)
/*
   let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
     
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

    function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.'); 
    }*/

  


    
    
    
  return (
    <>
    <Container maxWidth="xl">
      <BreadcrumbsMUI aria-label="breadcrumb">
     
      {/*crumbs.map((crumb, index) => (
       crumb
      ))*/}

      {testArr.map((item)=>{
       console.log(item);
        return (<span key={item.crumbTitle.crumbTitle}><Link component={RouterLink} to={item.pathname}>{item.crumbTitle.crumbTitle}</Link></span>)
      })}

   

      </BreadcrumbsMUI>
    </Container>
  </>
  )
}
