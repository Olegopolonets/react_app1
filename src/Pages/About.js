import React, { Component } from "react";
import { Nav, Tab, Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img className="mw-100" src="https://i.pinimg.com/originals/da/9d/e4/da9de440b0676dfff7c8d75257b371a1.png" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img className="mw-100" src="https://images.squarespace-cdn.com/content/v1/5b43df22b40b9d355958dc25/1564679669981-HE05040FSX9PG2VDIYAX/10_pluralsight_mob_programming_2.jpg" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img className="mw-100" src="https://ak.picdn.net/shutterstock/videos/14097617/thumb/1.jpg" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img className="mw-100" src="https://treewebsolutions.com/uploads/article/19/top-front-end-frameworks-in-2020_M1yLHvWwc4IhY3NL.jpg" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img className="mw-100" src="https://i.morioh.com/990d21e6a2.png" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe provident eaque, corporis amet vitae unde iste assumenda! Magnam repudiandae distinctio soluta doloremque saepe sed!</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
