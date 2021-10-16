import React from 'react';
import { Card } from 'react-bootstrap';
import { render } from 'react-dom';
import sweetApples from '../assets/sweetapples.png';
import japan from '../assets/views.jpg';
import weatherDash from '../assets/weatherdash.png';
import notetaker from '../assets/notetaker.png';
import theDegenerate from '../assets/thedegenerate.png';


const Projects = () => {
  const cardInfo = [
    {
      image: { sweetApples },
      title: "Sweet Apples",
      text: "Sweet Apples was designed as a web application to allow users to view/post reviews to some of their favorite video games."
    },
    {
      image: { theDegenerate},
      title: "The Degenerate", 
      text: "This web application allows a user to choose a sport and view live games as well as lets users place bets. "
    },
    {
      image: { weatherDash },
      title: "Weather Dashboard",
      text: "A simple weather dashboard, allowing users to choose/ save a city and view weather for the next 5-days. "
    },
    {
      image: { notetaker },
      title: "Note Taker",
      text: "Web application that allows a user to create a notes and save them for later use."
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card id="Projects" className="box" key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>

}

export default Projects
