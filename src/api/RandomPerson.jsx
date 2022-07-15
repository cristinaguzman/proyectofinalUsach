import React, {useEffect, useState} from 'react'
// useEffect: cada vez que se rendiriza en componente llama a una funcion.
// useState: Es un Hook que te permite añadir el estado de React a un componente de función.


export default function RandomPerson() {
  const [person, setPerson] = useState(null)
  
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then((res)=> res.json())
    .then((data)=> {console.log(data);
      
      const personData = {
        name: data.results[0].name.first,
        lastname: data.results[0].name.last,
        img: data.results[0].picture.large
      }
      
      setPerson(personData)})

  },[])

  return (
    <div>
      {person ? (<div className='card w-100 justify-content-center align-items-center p-3'>  <img width="200px" src={person.img} alt="profile"/><p className='text-uppercase'>{person.name} {person.lastname}</p> 
      <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis sint sequi nisi quas earum officia, exercitationem libero voluptates error rem! Beatae repudiandae amet sunt laudantium, consequuntur placeat officiis delectus!</p></div>):null}
    </div>
  )
}
