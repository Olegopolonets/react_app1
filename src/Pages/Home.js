import React, { Component } from "react";
import CarouseleBox from "../Components/CarouseleBox";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardDeck, Container, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouseleBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>QA engineers</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
              <Card.Img variant="bottom" src="https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Card>

            <Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <Card.Body>
                <Card.Title>Web analysts</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
