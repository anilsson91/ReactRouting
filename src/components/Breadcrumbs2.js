import React, {useState, useEffect} from 'react'
import { useLocation, Link as RouterLink , useMatches, matchPath, useMatch} from 'react-router-dom';
import {routes} from "../App"
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import { Link } from '@mui/material';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';


function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

const breadcrumbNameMap = {
  '/items': 'Items',
  '/items/:id': 'itemname',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

export default function Breadcrumbs2() {



  const location = useLocation();
  const matches = useMatches();

  const pathnames = location.pathname.split('/').filter((x) => x);
  
   //console.log(matches);
  
  const test = matchPath(
    { path: "/items/:id" },
    "/items/123",
  );



  

  

 /*
    Testa att prova stacka alla url anrop på varandra och sedan kolla den nuvarande relativa urlen, och jämför med stacken.
    Löser problemet med att breadcrumbsen stackas på varandra likt items/itemID(och att vi har tillgång
        till datan från loadern) / edit etc. Jämför sedan den senaste urlen  och loopa tillbaka i stacken tills match.
         filtrera sen så vi tar bort. 

         Alternativt-> nu när vi har itemID. Ser om vi kan ge id till routsen och använda respektive loader för att hämta data
 */

    
  return (
    <>
    <Container maxWidth="xl">
      <BreadcrumbsMUI aria-label="breadcrumb" maxItems={2}>

        {matches.map((match)=> {
                let mat = matchPath(
                    { path: match.pathname },
                    match.pathname,
                  );


            if(mat!=null) {         
            //      console.log(mat);         
            } 
            return <p></p>

           
            
        
            return <h1>hej</h1>
        })}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
      </BreadcrumbsMUI>
    </Container>
  </>
  )
}
