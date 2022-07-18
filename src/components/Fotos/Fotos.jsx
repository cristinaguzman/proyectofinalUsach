import React, {useEffect, useState} from 'react'

const [dataa, setdataa] = useState(null);

export function Fotos() {
  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
        .then((response) => response.json())
        .then((data) => {
            const Data = {
              img: "https://www.artic.edu/iiif/2/"+data.data[0].image_id+"/full/843,/0/default.jpg",
              title: data.data[0].title
            }
          
            setdataa(Data);
       
        })
    
      }, []);
      <div>
        <div className="card">
return (
<div>
 
  {dataa ? (<div className='card w-100 justify-content-center align-items-center p-3'>  
  <img width="200px" src={dataa.img}s alt="profile"/>
  <p className='text-uppercase'>{dataa.title}</p> 
  </div>):null}
</div>
)
</div>
</div>

  }