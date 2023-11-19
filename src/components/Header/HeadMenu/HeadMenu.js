import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './HeadMenu.css';
import LogoFooter from '../../Footer/LogoFooter';
import Menu from './Menu.svg';
import { useNavigate } from "react-router-dom";

function LoginButton() {
  function handleClick() {
    navigate("/login");
  }
  const navigate = useNavigate();

  return (
    <button variant="outline-success" className='button' onClick={handleClick}>
      Войти
    </button>
  );
}  
function ReturnMain() {
  function handleClick(evt) {
    navigate("/");
  }
  const navigate = useNavigate();

  return (
    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
  );
}  

function HeadMenu() {
  const expand = false
  return (    
        
      <Navbar key={expand} expand={expand} className="mb-3 HeadMenu">
          <Container fluid  >
              <Navbar.Toggle bg="*" aria-controls={`offcanvasNavbar-expand-${expand}`} className='own HeadMenu border-0 shadow-none'>
                  <img src={Menu} alt='Menu' />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                  <Offcanvas.Header closeButton className='HeadMenu__header closeButton d-flex'>
                <LogoFooter />
              </Offcanvas.Header>
                  <Offcanvas.Body className='HeadMenu__body'>
                
                <Nav className="text-center nav">
                  <ReturnMain />
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>Тарифы</Nav.Link>
                  <Nav.Link href="###" style={{pointerEvents: 'none'}}>FAQ</Nav.Link>
                </Nav>
                    <a className='HeadMenu__link' href='XXX' >Зарегистрироваться</a>
                <LoginButton />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
  );
}

export default HeadMenu;
