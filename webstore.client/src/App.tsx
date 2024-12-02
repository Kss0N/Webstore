import { useEffect, useState } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';








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
          <p>Connect</p>
          <ListGroup>
            <ListGroup.Item action href="https://x.com/WrestleWithG0d" target="_blank">
              <FontAwesomeIcon icon={faXTwitter}/> Twitter
            </ListGroup.Item>
            <ListGroup.Item action href="https://github.com/Kss0N" target="_blank">
              <FontAwesomeIcon icon={faGithub}/> Github
            </ListGroup.Item>
            <ListGroup.Item action href="mailto:jakob@kristerson.se">
              <i className="bi bi-envelope-at-fill"></i> jakob@kristerson.se
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Row>
    </footer>
  </Container>);
};