import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import sweetApples from "../assets/sweetapples.png";
import weatherDash from "../assets/weatherdash.png";
import notetaker from "../assets/notetaker.png";
import theDegenerate from "../assets/thedegenerate.png";

const Projects = () => {
  return (
    <div className="project-cards" id="projects">
      <div className="project1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={sweetApples} />
          <Card.Body>
            <Card.Title>Sweet Apples</Card.Title>
            <Card.Text>
              Sweet Apples was designed as a web application to allow users to
              view/post reviews to some of their favorite video games.
            </Card.Text>
            <Button
              variant="primary"
              href="https://ancient-plains-02897.herokuapp.com/"
              target="_blank"
            >
              View Sweet Apples
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="project2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={weatherDash} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              A simple weather dashboard, allowing users to choose/save a city
              and view weather for the next 5-days.
            </Card.Text>
            <Button
              variant="primary"
              href="https://kevintran95.github.io/weather-dashboard/"
              target="_blank"
            >
              View Weather Dashboard
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="project3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={theDegenerate} />
          <Card.Body>
            <Card.Title>The Degenerate</Card.Title>
            <Card.Text>
              This web application allows a user to choose a sport and view live
              games as well as lets users place bets.
            </Card.Text>
            <Button
              variant="primary"
              href="https://syackzan.github.io/The-Degenerate/"
              target="_blank"
            >
              View The Degenerate
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="project4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={notetaker} />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              Web application that allows a user to create a notes and save them
              for later use.
            </Card.Text>
            <Button
              variant="primary"
              href="https://glacial-thicket-94833.herokuapp.com"
              target="_blank"
            >
              View Note Taker
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
