import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-left-rear-three-quarter.jpeg?isig=0&q=80" alt="" style={{width:"100%", height:"550px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1755775200530/front-left-side-47.jpg?imwidth=420&impolicy=resize" alt="" style={{width:"100%", height:"550px"}}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/50138/kia-sonet-right-front-three-quarter32.jpeg?wm=1&q=80" alt="" style={{width:"100%", height:"550px"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
