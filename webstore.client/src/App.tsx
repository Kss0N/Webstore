import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';






function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {




  return (<Container data-bs-theme={getPreferredTheme()}>
    <h1 className="display-1 border-bottom mb-2">Webshop</h1>

    <footer className="footer">

    </footer>
  </Container>);
};