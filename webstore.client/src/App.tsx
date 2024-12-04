import { useEffect, useState, useReducer } from 'react';
import { Card, Carousel, Container, ListGroup, Nav, Navbar, Ratio, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';




interface Offer {
  name: string;
  image: string;
  price: number;
  discount: number;
};

const myBestOffers: Offer[] = [
  {
    name: 'Blue shirt',
    image: 'https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg',
    price: 100,
    discount: 10
  },
  {
    name: 'sneakers',
    image: 'https://thumblr.uniid.it/product/225766/97b4fbed16bd.jpg?width=1200&format=webp&q=75',
    price: 150,
    discount: 5
  }
];

function BestOfferCard({ offer }: {offer: Offer}) {

  return (<Card>
    <Card.Img src={offer.image} variant="top" className="ratio ratio-2x1" />
    <Card.Body>
      <Card.Title>{offer.name}</Card.Title>
    </Card.Body>

  </Card>);
}

function BestOffers({ offers }: {offers: Offer[]}) {

  return (<Carousel interval={2000}>
    {
      offers.map(offer =>
      (<Carousel.Item key={offer.name}>

        <BestOfferCard offer={offer} />

      </Carousel.Item>))
    }
  </Carousel>);
}

function Toolbar({ isLoggedIn = false }: {isLoggedIn: boolean}) {

  return (<Navbar sticky="top">

    <Nav>
      <Nav.Item>
        <Nav.Link>
          <i className="bi bi-person-circle"></i> {isLoggedIn ? "Account" : "Login" }
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <i className="bi bi-cart3"></i> Cart
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <i className="bi bi-gear"></i> Preferences
        </Nav.Link>
      </Nav.Item>
    </Nav>

    
  </Navbar>);
}



function Social({label="", link="", icon ="" }: {label:string, link: string, icon: string | IconDefinition }) {
  return (<ListGroup.Item href={link} action target="_blank">
    {typeof icon == 'string' ? (<i className={icon}></i>) : (<FontAwesomeIcon icon={icon} />)} {label}
  </ListGroup.Item>);
}

export default function App() {





  return (<Container fluid>

    <Toolbar/>

    <h1 className="display-1 border-bottom mb-2">Webshop</h1>

    <main className="min-vh-60">
      <Container className="h-25 mb-10 d-inline-block d-flex justify-content-center">
        <BestOffers offers={myBestOffers} />
      </Container>
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