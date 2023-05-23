import React, {useState, useEffect} from 'react'
import { useLocation, RouterLink , useMatches, matchPath} from 'react-router-dom';
import {routes} from "../App"
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import { Link } from '@mui/material';
import {Container} from '@mui/material';

export default function Breadcrumbs() {
  const[testArr, setTestArr] = useState([]);  
   let matches = useMatches();

   console.log(matches)
   
  

   useEffect(()=>{

    matches.forEach((match)=>{

      if(Boolean(match.handle?.crumb)){

        let arrCopy = [...testArr];

        for(let a = arrCopy.length-1; a >= 0; a--){
          
          /*FEL-> Matchar mot enstaka paths. kolla på etta imorn.
          */
          if(arrCopy[a].pathname == match.pathname){
            arrCopy.splice(a);
            break;
          }

        }
        arrCopy.push({crumb: match.handle.crumb(match.data), pathname: match.pathname});
        console.log(arrCopy)
        setTestArr(arrCopy);
      }

   });
  

   },[matches]);
   
   console.log(testArr)

   let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
     
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

    function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.'); 
    }

  


    
    
    
  return (
    <>
    <Container maxWidth="xl">
      <BreadcrumbsMUI aria-label="breadcrumb" maxItems={1}>
     
      {/*crumbs.map((crumb, index) => (
       crumb
      ))*/}

      {testArr.map((item)=> (
        item.crumb
      )
      )}

      </BreadcrumbsMUI>
    </Container>
  </>
  )
}
