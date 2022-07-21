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
  <section className='row container mx-auto mt-4 mb-5 g-3'>
  
  {Array.isArray(dataa)
        ? dataa.map(data => (
            <article className='col-12 col-md-6 col-xl-4 col-xxl-3' key={data.id}>
              <div className='card w-100 h-100 shadow-sm'>
              <img alt={data.title} src={`https://www.artic.edu/iiif/2/`+data.image_id+`/full/843,/0/default.jpg`}/>
              <h5 className='p-3'>Título de la obra: {data.title} </h5>
             </div>
            </article>
          ))
        : null}
  </section>
)
}