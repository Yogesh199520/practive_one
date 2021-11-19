import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Img, Body, Title, Text, Button, Carousel, Item, Caption } from 'react-bootstrap';
import Hookref from './Hookref.jsx';
import Model from './Model.jsx';
import Canvas from './Canvas.jsx';
import Transition from './Transition.jsx';
//import Owl from './Owl.jsx';
import Newone from './Newone.jsx';
import Test from './Test.jsx';
import Hook from './Hook.jsx';
import Map from './Map.jsx';
import Todo from './Todo.jsx';
function BS5(){
	return(
		<>
			<Container>
			  	<Row className="bg-light border">
			    	<Col>1 of 3</Col>
			    	<Col>2 of 3</Col>
			    	<Col>3 of 3</Col>
			  	</Row>
			  	<Row className="bg-light border">
				    <Col xs={12} md={4}>1 of 3</Col>
				    <Col xs={12} md={4}>2 of 3 (wider)</Col>
				    <Col xs={12} md={4}>3 of 3</Col>
				</Row>
				<Row className="bg-light border">
				    <Col xs={{ order: 3 }}>First</Col>
				    <Col xs={{ order: 2 }}>Second</Col>
				    <Col xs={{ order: 1 }}>Third</Col>
				</Row>
				<Row>
					<Col>
						<Card xs={12} md={4}>
							<Card.Img variant="top" src="https://via.placeholder.com/300" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <Button variant="primary">Go somewhere</Button>
							  </Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={4}>
						<Card>
							<Card.Img variant="top" src="https://via.placeholder.com/300" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <Button variant="primary">Go somewhere</Button>
							  </Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={4}>
						<Card>
							<Card.Img variant="top" src="https://via.placeholder.com/300" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <Button variant="primary">Go somewhere</Button>
							  </Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Row>
							<Carousel>
							  	<Carousel.Item>
								    <img
								      className="d-block w-100"
								      src="https://via.placeholder.com/1600x400"
								      alt="First slide"
								    />
								    <Carousel.Caption>
								      <h3>First slide label</h3>
								      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								    </Carousel.Caption>
							  	</Carousel.Item>
							  	<Carousel.Item>
								    <img
								      className="d-block w-100"
								      src="https://via.placeholder.com/1600x400"
								      alt="Second slide"
								    />

								    <Carousel.Caption>
								      <h3>Second slide label</h3>
								      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								    </Carousel.Caption>
							  	</Carousel.Item>
							  	<Carousel.Item>
								    <img
								      className="d-block w-100"
								      src="https://via.placeholder.com/1600x400"
								      alt="Third slide"
								    />

								    <Carousel.Caption>
								      <h3>Third slide label</h3>
								      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
								    </Carousel.Caption>
							  </Carousel.Item>
							</Carousel>
						</Row>
					</Col>
				</Row>
			</Container>
			<hr />
			<br />
			<Hookref />
			<hr />
			<br />
			<Model />
			<hr />
			<br />
			<Canvas />
			<hr />
			<br />
			<Transition />
			{/*<hr />
			<br />
			<Owl />*/}
			<hr />
			<br />
			<Newone />
			<hr />
			<br />
			<Test />
			<hr />
			<br />
			<Hook msg="This is hook example" />
			<hr />
			<br />
			<Map info="This is google map example" />
			<hr />
			<br />
			<Todo info="This is google map example" />
			
		</>

	);
}
export default BS5;