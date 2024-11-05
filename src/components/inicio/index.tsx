import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Iniciar from '../iniciar';
import Logo from '../../assets/logo.png'

function Inicio() {
    const navigate = useNavigate(); 
    
    return (
      <>      
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('entregas')} className='botoes'>Entregas Técnias/Contribuições</Nav.Link>
              <Nav.Link onClick={() => navigate('valores')} className='botoes'>Valores do Banco</Nav.Link>
              {/* <Nav.Link onClick={() => navigate('soft-skills')} className='botoes'>Soft Skills</Nav.Link>  */}
              {/* <Nav.Link onClick={() => navigate('feedbacks')} className='botoes'>Feedbacks</Nav.Link> */}
              {/* <Nav.Link onClick={() => navigate('trajetoria')} className='botoes'>Trajetória Profissional</Nav.Link> */}
              {/* <Nav.Link onClick={() => navigate('relacionamentos')} className='botoes'>Relacionamentos Pessoais</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      </>
    );
  }
  
  export default Inicio;
  