import React, {useEffect, useState} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;

export function Fotos() {

  const [dataa, setdataa] = useState(null);
  useEffect(() => {
 
        async function getdata() {
          const response = await fetch('https://api.artic.edu/api/v1/artworks', {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          });
          const data = await response.json();        
          setdataa(data.data);
          console.log(setdataa)
        }
    
        getdata();
    
      }, []);
      
return (
  <div >
  
  {Array.isArray(dataa)
        ? dataa.map(data => (
            <div key={data.id}>
              <h5>Título de la obra: {data.title} </h5>
             <img width="20%" alt='a' src={`https://www.artic.edu/iiif/2/`+data.image_id+`/full/843,/0/default.jpg`}/>
            </div>
          ))
        : null}
  </div>
)
}