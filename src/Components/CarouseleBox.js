import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import forestImg from "../assets/forest.jpg";
import dforestImg from "../assets/dforest.jpg";
import sforestImg from "../assets/sforest.jpg";

export default class CarouseleBox extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={forestImg} alt="Forest" />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ipsum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={dforestImg} alt="Forest" />
            <Carousel.Caption>
              <h3>Dark Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ipsum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={sforestImg} alt="Forest" />
            <Carousel.Caption>
              <h3>Summer Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ipsum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
