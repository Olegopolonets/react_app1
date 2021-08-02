import React, { Component } from "react";
import { Row, Media, Container, Col, ListGroup, Card } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />

              <Media.Body>
                <h5>Blog post</h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores ipsam impedit itaque quidem facere adipisci officiis fuga corrupti tenetur distinctio rerum dolorum, dolorem consectetur ea amet, illum quo asperiores.</p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src="https://web-creator.ru/uploads/Page/19/python.svg" />

              <Media.Body>
                <h5>Blog post</h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores ipsam impedit itaque quidem facere adipisci officiis fuga corrupti tenetur distinctio rerum dolorum, dolorem consectetur ea amet, illum quo asperiores.</p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src="https://www.meet-and-code.org/media/cache/small/events/89ce5a97daf20d86fb533f8ab996a2229196e521.png" />

              <Media.Body>
                <h5>Blog post</h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores ipsam impedit itaque quidem facere adipisci officiis fuga corrupti tenetur distinctio rerum dolorum, dolorem consectetur ea amet, illum quo asperiores.</p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src="https://proxys.io/files/blog/Java/javalogo.png" />

              <Media.Body>
                <h5>Blog post</h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores ipsam impedit itaque quidem facere adipisci officiis fuga corrupti tenetur distinctio rerum dolorum, dolorem consectetur ea amet, illum quo asperiores.</p>
              </Media.Body>
            </Media>
          </Col>

          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JS</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>IDE</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-5" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores ipsam impedit itaque quidem facere adipisci officiis fuga corrupti.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
