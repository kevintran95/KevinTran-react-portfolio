import React from 'react';
import { Card } from 'react-bootstrap';
import sweetApples from '../sweetapples.png';

const Projects = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sweetApples} />
      <Card.Body>
        <Card.Title>Sweet Apples</Card.Title>
        <Card.Text>
          Sweet Apples was designed as a web application to allow users to view/post review to some of their favorite video games
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Projects
