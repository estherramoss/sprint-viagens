// DESENVOLVEDORAS 
// NOME: Esther Ramos Boochini 
// NOME: Isabela da Silva Gomes

import React from 'react';
import Container from 'react-bootstrap/Container';
import Main from './components/Main/Main';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from './components/Slider';
import Cards from './components/Cards';
import { FaHome, FaCog, FaUser } from 'react-icons/fa'; // Importando ícones do react-icons
import './App.css'; // Importando o arquivo CSS

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#2e8b57' }}> {/* Definindo o estilo diretamente */}
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#settings"><FaCog /></Nav.Link>
              <Nav.Link href="#profile"><FaUser /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Cards />
      <Cards />
      <Cards />

      <Slider />

      <Main />
    </>
  );
}

export default ColorSchemesExample;
