 
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/Content/Content.scss';
export function Content() {
 return(
<div className='Content'>
  <Carousel fade  >
  <Carousel.Item interval={2000}>
 
      <img
   
      src="https://i.postimg.cc/rwRFKj4n/banner.png"
   
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Artista de todo el mundo</h3>
      <p>Diego Rivera, vincent van gogh, Picasso y muchos más</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    
      src="https://i.postimg.cc/rwRFKj4n/banner.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Disfruta las obras a un click de distancia</h3>
      <p>Aprende historia del arte aquí</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
     
      src="https://i.postimg.cc/rwRFKj4n/banner.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Bienvenido</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 )
}
