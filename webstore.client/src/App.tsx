import { useEffect, useState, useReducer } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';







function Social({label="", link="", icon ="" }: {label:string, link: string, icon: string | IconDefinition })
{
  return (<ListGroup.Item href={link} action target="_blank">
    {typeof icon == 'string' ? (<i className={icon}></i>) : (<FontAwesomeIcon icon={icon} />)} {label}
  </ListGroup.Item>);
}

export default function App() {




  return (<Container fluid>
    <h1 className="display-1 border-bottom mb-2">Webshop</h1>

    <main className="h-60">
      <p>AAA</p>
    </main>

    <footer className="footer border-top mt-2">
      <Row>
        <Container className="col border">
          <p>&copy; Jacob Kristerson (Kss0N) Lund, Sweden</p>
        </Container>
        <Container className="col border">
          <p className="display-5">Connect</p>
          <ListGroup>
            <Social label="Twitter"
              link="https://x.com/WrestleWithG0d"
              icon={faXTwitter} />
            <Social label="Github"
              link="https://github.com/Kss0N"
              icon={faGithub} />
            <Social label="LinkedIn"
              link="https://www.linkedin.com/in/jakob-kristersson-901748338/"
              icon={faLinkedin} />
            <Social label="jakob@kristerson.se"
              link="mailto:jakob@kristerson.se"
              icon="bi bi-envelope-at-fill" />
          </ListGroup>
        </Container>
      </Row>
    </footer>
  </Container>);
};