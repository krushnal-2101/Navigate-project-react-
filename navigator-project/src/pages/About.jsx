import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap"

const About = () => {
  const navigator = useNavigate();
  
  return (
   <Container className="ms-auto">
    <Col>
    <Row>
       <Card style={{ width: "24rem" }} className="m-4">
      <Card.Img variant="top" src="https://imgd.aeplcdn.com/1056x594/n/ltan3cb_1726711.png?q=80" />
      <Card.Body>
        <Card.Title>HTK</Card.Title>
        <Card.Text>
          The Kia Sonet HTK is a mid-spec variant (approx. ₹8.4–9.9 Lakhs
          ex-showroom) available with 1.2L Petrol (5MT) or 1.5L Diesel (6MT),
          offering 16-inch wheels, 8-inch touchscreen
        </Card.Text>
        <Button variant="primary" onClick={()=> navigator("/booking/htk")} >BOOK NOW</Button>
      </Card.Body>
    </Card>


       <Card style={{ width: "24rem" }} className="m-4">
      <Card.Img variant="top" src="https://imgd.aeplcdn.com/1056x594/n/ltan3cb_1726711.png?q=80" />
      <Card.Body>
        <Card.Title>HTK(O)</Card.Title>
        <Card.Text>
          The Kia Sonet HTK is a mid-spec variant (approx. ₹8.4–9.9 Lakhs
          ex-showroom) available with 1.2L Petrol (5MT) or 1.5L Diesel (6MT),
          offering 16-inch wheels, 8-inch touchscreen
        </Card.Text>
        <Button variant="primary" onClick={()=> navigator("/booking/htk-o")}>BOOK NOW</Button>
      </Card.Body>
    </Card>

       <Card style={{ width: "24rem" }} className="m-4">
      <Card.Img variant="top" src="https://imgd.aeplcdn.com/1056x594/n/ltan3cb_1726711.png?q=80" />
      <Card.Body>
        <Card.Title>HTK PLUS</Card.Title>
        <Card.Text>
          The Kia Sonet HTK is a mid-spec variant (approx. ₹8.4–9.9 Lakhs
          ex-showroom) available with 1.2L Petrol (5MT) or 1.5L Diesel (6MT),
          offering 16-inch wheels, 8-inch touchscreen
        </Card.Text>
        <Button variant="primary" onClick={()=> navigator("/booking/htk-plus")}>BOOK NOW</Button>
      </Card.Body>
    </Card>
      </Row>
      </Col>
   <Button onClick={()=> navigator(-1)}>BACK</Button>

   </Container>

   

  );

};

export default About;
